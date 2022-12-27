import Image from "next/image";
import Reggae  from "../public/images/Reggae.svg";
import HeartIcon from "../public/icon/HeartIcon";
import Vertical from "../public/images/more-vertical.svg";
import { ReactNode, useState } from "react";

type SongItemProps = {
    title: string,
    artist: string,
    duration: ReactNode,
    src: string,
    type: string,
  };

const SongItem = ({ title, artist, duration, src, type }: SongItemProps) => {
    const [like, setLike] = useState(false);
  
    const handleLike = () => {
      setLike(like => !like)
    };
    return (
        <>
            <section className="bg-color8 flex sm:justify-between items-center py-2 sm:py-1.5 pl-2 sm:pl-5  rounded-[15px] w-full">
                <div className="flex">
                    <Image src={src} height={40} width={40} alt="musicImg" className="mr-2" />
                    <div className="w-fit ml-5 justify-center items-center hidden sm:flex">
                        <HeartIcon color='#E5524A' like={like} handleLike={handleLike} />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-grow sm:justify-around sm:items-center text-sm pl-2 sm:pl-0">
                    <p className="title max-w-[200px]"> { title } ~ { artist } </p>
                    <p className="type"> { type } </p>
                </div>
                <div className="flex flex-col-reverse items-center ml-auto sm:flex-row sm:justify-around sm:flex-grow pr-2 sm:pr-0">
                    <p className="duration mt-1 sm:mt-0"> { duration } </p>
                    <Image src={Vertical} height={16} width={16} alt="musicImg" className="" />
                </div>
            </section>
        </>
    );
}
 
export default SongItem;