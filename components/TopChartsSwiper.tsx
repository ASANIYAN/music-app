import styles from '../styles/Swiper.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import HeartIcon from "../public/icon/HeartIcon";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Autoplay, Keyboard, Pagination } from "swiper";
import { ChartProps } from '../props/types';
import useFetchRecommendations from './hooks/useFetchRecommendations';
import Skeleton from 'react-loading-skeleton';
import { useMyStore } from './app/store';


export const ChartHeadingMobile = () => {
    return (
        <h3 className="font-semibold text-xl text-left text-color1"> Top Recommendations </h3>
    );
}


const ChartMobile = ({ title, artist, duration, src, type, id }: ChartProps) => {
    
    const [like, setLike] = useState(false);
    const addLikes = useMyStore((state: any) => state.addLikes);
    const removeLikes = useMyStore((state: any) => state.removeLikes);
    const likes = useMyStore((state: any) => state.likes);
    // console.log(likes);
  
    const handleLike = ( title: string, artist: string, src: string, type: string, id: number ) => {
        setLike(like => !like)
        if(like) {
          addLikes(title, artist, src, type, id);
        }
        removeLikes(id);
      };
  
    return (
    <>
        <section className='bg-navbar max-w-[300px] rounded-[20px] flex justify-between py-3 px-5 mt-4 cursor-pointer hover:shadow-md'>
            <section className='flex flex-col'>
                <Image src={src} width={70} height={10} alt={"music_image"} className="rounded-[10px]" />
                <div className='font-normal mt-2'>
                    <p className=' text-[17px] title'> {title} </p>
                    <p className='text-[12px] text-color2 artist'> {artist} </p>
                    <p className='text-[12px] block duration mt-3'> {duration} </p>
                </div>
            </section>
            
            <div className=''>
                <HeartIcon color='#E5524A' like={like} handleLike={() =>handleLike(title, artist, src, type, id)} />
            </div>
        </section>
    </>
    )
  }



const TopChartsSwiper = () => {

  // queries
  const { data:recommendation, status } = useFetchRecommendations();

    return (
        <>
            { status === "loading" && 
              <Skeleton 
                width={'100%'} 
                height={150}
                borderRadius={'1.25rem'} 
                duration={2} 
                baseColor={"#1A1E1F"} 
                highlightColor={"rgba(239, 238, 224, 0.25)"} 
                className="mt-4"
              /> 
          } 
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                keyboard={{
                enabled: true,
                }}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    860: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                modules={[Pagination, Keyboard]}
                className="mySwiper"
          >
             { status === 'success' && recommendation?.song_recommendations?.recommendations?.map((item: any) => (
                <SwiperSlide 
                key={item.recommended_song.id}
                >
                    <ChartMobile     
                    title={item.recommended_song.title} 
                    artist={item.recommended_song.artist_names} 
                    duration={"1:22"}
                    id={item.recommended_song.id}
                    type={item.recommended_song._type}
                    src={item.recommended_song.header_image_thumbnail_url ? 
                        item.recommended_song.header_image_thumbnail_url : 
                        "/images/Golden.svg"}  
                    />
                </SwiperSlide>
            )) }

            <style jsx global >{`
            .swiper-pagination-bullet {
                display: none;
            }
            .swiper-pagination-bullet-active {
                display: none;
            `}
            </style>
          </Swiper>
        </>
    );
}
 
export default TopChartsSwiper;