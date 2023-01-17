import { useState } from "react";
import { useMyStore } from "../app/store";

const MyCollections = () => {
    
    const collection = useMyStore((state:any) => state.collection );
    const [hover, setHover] = useState(false);

    return (
        <>
            { collection.length > 0 && 
                <section className="grid grid-cols-collection gap-6 w-full">
                    {
                        collection.map((item: any) => (
                        <div 
                        key={item.id} 
                        className={`h-[240px] w-full rounded-[20px] relative`}
                        style=
                        {{
                            background: `url(${item.src})`,
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat', 
                            backgroundPosition: 'center'
                        }}
                        >
                            <div className="flex flex-col justify-end pl-6 pb-6 h-full" 
                            >
                                <p className="text-lg md:text-2xl"> {item.title} </p>
                                <p className="text-[10px] -mt-1"> {item.artist} </p>
                            </div>
                            <div 
                            className={`absolute hoverDiv inset-0 bg-gray-900 opacity-0 transition-opacity duration-150`}>
                            </div>
                        </div>
                    ))}
                </section>
            }
            { collection.length === 0 && ( 
                <p className="text-2xl text-center"> You have no collection </p>
            )}
        </>
    );
}
 
export default MyCollections;