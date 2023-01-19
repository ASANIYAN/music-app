import { ReactNode, useState } from "react";
import { useMyStore } from "../app/store";


type collectionProps = {
    title: string,
    artist: string,
    duration: string,
    src: string,
    type: string,
    path: string,
    id: number
}

const CollectionItem = ({ title, artist, duration, src, type, path, id }: collectionProps) => {
    return(
            <div 
            className={`h-[240px] w-full rounded-[20px] relative`}
            style= {{
                        background: `url(${src})`,
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
                <div 
                className={`absolute hoverDiv inset-0 bg-gray-900 opacity-0 transition-opacity duration-150`}>
                </div>
            </div>
    );

};

const MyCollections = () => {
    
    const collection = useMyStore((state:any) => state.collection );
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
                    title={collection.title} 
                    artist={collection.artist} 
                    duration={collection.duration} 
                    src={collection.src} 
                    type={collection.type} 
                    path={collection.path} 
                    id={collection.id}  />
                ))}
                </section>
            }
        </>
    );
}
 
export default MyCollections;