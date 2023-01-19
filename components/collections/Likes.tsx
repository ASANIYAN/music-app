import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { collectionProps } from "../../props/types";
import { SuccessToast } from "../../toast/toasts";
import { useMyStore } from "../app/store";


const LikeItem = ({ title, artist, duration, src, type, path, id }: collectionProps) => {
    const [click, setClick] = useState(false);
    const removeLikes = useMyStore((state: any) => state.removeLikes);
    
    const handleClick = () => {
        setClick(click => !click);
    };
    
    const handleLikeItemRemoval = () => {
        removeLikes(id);
        SuccessToast('Item removed successfully');
    } 

    return(
        <div>
            { click && 
                <div className="my-2 text-center flex justify-center"> 
                    <FaPlay className="mr-3 text-color4 text-lg" />
                    <RiDeleteBin5Line  
                    onClick={handleLikeItemRemoval}
                    className="ml-3 text-xl cursor-pointer" 
                    />  
                </div> 
            }
            <div
            onClick={handleClick} 
            className={`h-[320px] sm:h-[240px] w-full rounded-[20px] cursor-pointer`}
            style= {{
                        background: ` 
                        linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                          ), url(${src})`,
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center'
                    }}
            >
                <div 
                className="flex flex-col justify-end pl-6 pb-6 h-full" 
                >
                    <p className="text-lg md:text-2xl"> {title} </p>
                    <p className="text-[12px] -mt-1"> {artist} </p>
                </div>
            </div>
        </div>
    );

};

const Likes = () => {
   
    const likes = useMyStore((state:any) => state.likes );

    return (
        <>
            { likes.length === 0 && ( 
                <p className="text-2xl text-center"> You currently have no liked Item </p>
            )}
            { likes.length > 0 && 
                <section className="grid grid-cols-collection gap-6 w-full">
                    {
                        likes.map((item: any) => (
                            <LikeItem
                            key={item.id} 
                            title={item.title} 
                            artist={item.artist} 
                            duration={item.duration} 
                            src={item.src} 
                            type={item.type} 
                            path={item.path} 
                            id={item.id}  />
                    ))}
                </section>
            }
        </>
    );
}
 
export default Likes;