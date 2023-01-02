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


export const ChartHeadingMobile = () => {
    return (
        <h3 className="font-semibold text-xl text-left text-color1"> Top Recommendations </h3>
    );
}


type ChartProps = {
    title: string,
    artist: string,
    duration: ReactNode,
    src: string
  };

const ChartMobile = ({ title, artist, duration, src }: ChartProps) => {

    const [like, setLike] = useState(false);
  
    const handleLike = () => {
      setLike(like => !like)
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
                <HeartIcon color='#E5524A' like={like} handleLike={handleLike} />
            </div>
        </section>
    </>
    )
  }



const TopChartsSwiper = () => {
    
    const charts = 
    [
        {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:34:45",  src:"/images/Golden.svg"}, 
        {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:34:45",  src:"/images/Golden.svg"}, 
        {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
        {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
        {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01:25",  src:"/images/Tomorrow.svg"},
        {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01:25",  src:"/images/Tomorrow.svg"},
    ];

    return (
        <>
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
             { charts.map((chart, index) => (
            <SwiperSlide key={index}>
                <ChartMobile  title={chart.title} artist={chart.artist} duration={chart.duration} src={chart.src} />
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