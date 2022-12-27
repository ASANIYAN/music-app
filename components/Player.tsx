import Image from "next/image";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillPlayFill, BsFillVolumeUpFill, BsShuffle } from "react-icons/bs";
import { RiRepeatOneFill } from "react-icons/ri";
import UseScroll from "./hooks/UseScroll";
import ProgressBar from "./ProgressBar";
import VolumeBar from "./VolumeBar";

const Player = () => {  
  const scrollDirection  = UseScroll();

    return (
        <section className={`w-full py-4 z-50 fixed ${scrollDirection === 'down' ? '-bottom-36' : 'bottom-0'}  bg-[rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-500`}>
            <section className="flex justify-between px-5 md:px-10 xl:px-20">
                <section className="flex mt-3">
                    <Image src={"/images/Release1.svg"} width={60} height={60} alt={"music"} className="rounded-[14px]" />
                    <div className="ml-3 mt-2">
                        <p className="font-semibold text-sm md:text-lg text-white">Seasons in</p>
                        <p className="text-[10px] md:text-sm text-color2 md:mb-4">James</p>
                    </div>
                </section>
                
                <section className="flex mt-5 md:mt-2">
                    <div className="mr-8 mt-1 hidden md:block"> <BsShuffle className="text-xl cursor-pointer" /> </div>
                    <div className="mr-8 mt-1 hidden md:block "> <BiSkipPrevious className="text-2xl cursor-pointer" /> </div>
                    <div className=""> <BsFillPlayFill className="bg-color4 text-white cursor-pointer rounded-3xl text-3xl text-center p-1" /> </div>
                    <div className="ml-8 mt-0.5 md:mt-1"> <BiSkipNext className="text-2xl cursor-pointer" /> </div>
                    <div className="ml-8 mt-1 hidden md:block"> <RiRepeatOneFill className="text-2xl cursor-pointer" /> </div>
                </section>

                <section className="mt-5 hidden md:flex">
                    <BsFillVolumeUpFill className="text-2xl"  />
                    <div className="ml-2 pt-2.5">
                        <VolumeBar />
                    </div>
                </section>
            </section>

            <section className="mb-3 hidden -translate-y-1.5 md:block">
                <ProgressBar />
            </section>

        </section>
    );
}
 
export default Player;