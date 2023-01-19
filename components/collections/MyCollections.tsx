import { useState } from "react";
import { collectionProps } from "../../props/types";
import { useMyStore } from "../app/store";


const CollectionItem = ({ title, artist, duration, src, type, path, id }: collectionProps) => {
    return(
            <div 
            className={`h-[240px] w-full rounded-[20px]`}
            style= {{
                        backgroundImage: ` 
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
                    <p className="text-lg md:text-2xl font-extrabold"> {title} </p>
                    <p className="text-[10px] -mt-1 font-bold"> {artist} </p>
                </div>
                {/* <div 
                className={`absolute hoverDiv inset-0 bg-gray-900 opacity-0 transition-opacity duration-150`}>
                </div> */}
            </div>
    );

};

const MyCollections = () => {
    
    const collection = useMyStore((state:any) => state.collection );
    console.log(collection);
    const [hover, setHover] = useState(false);

    return (
        <>
        { collection.length === 0 && 
            <p className="text-2xl text-center"> You have no collection </p>
        }
        { collection.length > 0 && 
            <section className="grid grid-cols-collection gap-6 w-full">
                { collection.map((item: any) => (
                    <CollectionItem
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
 
export default MyCollections;