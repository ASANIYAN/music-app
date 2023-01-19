import { collectionProps } from "../../props/types";
import { useMyStore } from "../app/store";


const LikeItem = ({ title, artist, duration, src, type, path, id }: collectionProps) => {

    return(
            <div 
            className={`h-[240px] w-full rounded-[20px]`}
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
                    <p className="text-[10px] -mt-1"> {artist} </p>
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