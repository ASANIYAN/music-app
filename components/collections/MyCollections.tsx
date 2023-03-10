import { useEffect, useState } from "react";
import { collectionProps } from "../../props/types";
import { useMyStore } from "../app/store";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SuccessToast } from "../../toast/toasts";
import { GetItem, SetItem } from "../hooks/useLocalStorage";


const CollectionItem = ({ title, artist, duration, src, type, path, id }: collectionProps) => {
    const [click, setClick] = useState(false);
    const collection = useMyStore((state:any) => state.collection );
    const removeCollection = useMyStore((state: any) => state.removeCollection);
    
    const handleClick = () => {
        setClick(click => !click);
    };
    
    const handleCollectionItemRemoval = () => {
        removeCollection(id);
        SuccessToast('Item removed successfully');
        SetItem('collection', collection);
    }
    


    return(
        <div>
            <div>
                { click && 
                    <div className="my-2 text-center flex justify-center"> 
                        <FaPlay className="mr-3 text-color4 text-lg" />
                        <RiDeleteBin5Line  
                        onClick={handleCollectionItemRemoval}
                        className="ml-3 text-xl cursor-pointer" 
                        />  
                    </div> 
                }
                <div
                onClick={handleClick}
                className={`h-[320px] sm:h-[240px] w-full rounded-[20px] cursor-pointer`}
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
                        <p className="text-[12px] -mt-1 font-bold"> {artist} </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

const MyCollections = () => {
    
    const collection = useMyStore((state:any) => state.collection );
    const addCollection = useMyStore((state: any) => state.addCollection);
    // const [ renderedCollection, setRenderedCollection ] = useState(collection);
    // console.log(collection);
    // setRenderedCollection()
    // console.log(renderedCollection)

    // if (typeof window !== "undefined") {
    //     collection = GetItem('collection') !== undefined ? GetItem('collection') : collection;
    // }
    // const addCollection = useMyStore((state: any) => state.addCollection);

    // useEffect(() => {
    //     setRenderedCollection(GetItem('collection'));
    //     // if (renderedCollection && renderedCollection !== null) {
    //     //     addCollection(...renderedCollection);
    //     // }
    // }, [])

    // useEffect(() => {
    //     for (let i = 0; i < renderedCollection.length; i++) {
    //         addCollection(renderedCollection[i])
    //     }
    // }, [renderedCollection])
    

    return (
        <>
        { collection && collection.length === 0 && 
            <p className="text-2xl text-center"> You have no collection </p>
        }
        { collection && collection.length > 0 && 
            <section className="grid grid-cols-collection gap-6 w-full">
                {  collection.map((item: any) => (
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