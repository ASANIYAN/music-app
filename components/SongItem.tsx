import Image from "next/image";
import Reggae  from "../public/images/Reggae.svg";
import HeartIcon from "../public/icon/HeartIcon";
import Vertical from "../public/images/more-vertical.svg";
import React, { useEffect, useRef, useState } from "react";
import { useMyStore } from "./app/store";
import useOutsideAlerter from "./hooks/useOutsideAlerter";
import {ErrorToast, SuccessToast } from "../toast/toasts";
import { SetItem } from "./hooks/useLocalStorage";

type SongItemProps = {
    title: string,
    artist: string,
    duration: string,
    src: string,
    type: string,
    path: string,
    id: number
  };

  const SongItem = ({ title, artist, duration, src, type, path, id }: SongItemProps) => {
    
    const [like, setLike] = useState(false);
    const [toopTip, setToolTip] = useState(false);
    const ItemRef = useRef<null>(null);
    
    // gets items from store  
    const likes = useMyStore((state:any) => state.likes );
    const collection = useMyStore((state:any) => state.collection );
    const addLikes = useMyStore((state: any) => state.addLikes);
    const removeLikes = useMyStore((state: any) => state.removeLikes);
    const addCollection = useMyStore((state: any) => state.addCollection);
    const removeCollection = useMyStore((state: any) => state.removeCollection);
    console.log(likes);
    // console.log(collection);
    // console.log(likes);
    
    
    
    useOutsideAlerter(ItemRef, setToolTip);

    useEffect(() => {
        if (typeof window !== "undefined") SetItem('likes', likes);
    }, [likes]);

    useEffect(() => {
        if (typeof window !== "undefined") SetItem('collection', collection);
    }, [collection]);
    
    const handleLike = () => {
        if(!like) {
            setLike(true);
            
            // checks if item already exists in likes array
            const exists =  likes.some((item: any) => item.id === id); 
            
            // uses the result to determine if the selected item should be added.
            exists ? '' : addLikes({title, artist, src, type, id});  
        } else {
            setLike(false);

            // removes item for likes array using the unique id of each item
            removeLikes(id);
        }
    };

    const handleToolTip = () => {
        setToolTip(toolTip => !toolTip);
    }

    const handleAddToCollection = () => {
        const exists =  collection.some((item: any) => item.id === id);
        if (exists) {
            ErrorToast('Item already exists in collection');
        } else {
            SuccessToast('Added To Collections');
            addCollection({title, artist, src, type, id});
        }
    }
    
    

    return (
        <>
            <section className="bg-color8 flex sm:justify-between items-center py-2 sm:py-1.5 pl-2 sm:pl-5  rounded-[15px] w-full">
                <div className="flex">
                    <Image src={src} height={40} width={40} alt="musicImg" className="mr-2" />
                    <div className="w-fit ml-5 justify-center items-center hidden sm:flex cursor-pointer">
                        <HeartIcon color='#E5524A' like={like} handleLike={handleLike} />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-grow sm:justify-around sm:items-center text-sm pl-2 sm:pl-0">
                    <p className="title max-w-[200px] w-[200px]"> { title } ~ { artist } </p>
                    <p className="type"> { type } </p>
                </div>
                <div className="flex flex-col-reverse items-center ml-auto sm:flex-row sm:justify-around sm:flex-grow pr-2 sm:pr-0 relative">
                    <p className="duration mt-1 sm:mt-0"> { duration } </p>
                    <div>
                        <div ref={ItemRef} onClick={handleToolTip} className='w-fit'>
                            <Image 
                            src={Vertical} height={16} width={16} 
                            alt="musicImg" 
                            className="cursor-pointer"
                             />
                        { toopTip && 
                            <p
                            // ref={buttonRef}
                            onClick={handleAddToCollection}
                            className="bg-navbar p-1 w-32 -translate-y-11 -translate-x-24 absolute text-[12px] cursor-pointer 
                            hover:bg-color4 rounded-md"
                            >
                                Add To Collection
                            </p> 
                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default SongItem;