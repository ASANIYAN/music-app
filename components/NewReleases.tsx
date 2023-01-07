import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Pagination } from "swiper";

import Image from "next/image";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from "next/link";
import useFetchTopReleases from "./hooks/useFetchTopReleases";


export const NewReleasesHeading = () => {
    return (
        <h3 className="font-semibold text-xl md:text-2xl text-left text-color1"> Top releases. </h3>
    );
}

type ReleaseProps = {
    title: string,
    src: string
    id: number,
};

const NewRelease = ({ title, src, id } : ReleaseProps ) => {
    return (
    <Link href={`/album/${id}`} className="max-w-[180px]">
        <Image src={src} width={150} height={10} alt={`Release1`} className="rounded-[25px]" />
        <small className="text-[12px] pl-3 font-normal"> {title} </small>
    </Link>
    );
}


const NewReleases = () => { 

  // queries
  const { data:topReleases, status } = useFetchTopReleases();

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
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                500: {
                    slidesPerView: 3,
                    spaceBetween: 50
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 60,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                }
            }}
            modules={[Pagination, Keyboard]}
            className="mySwiper mt-2"
          >
            { status === 'success' && topReleases.chart_items.map((releases:any ) => (
              <SwiperSlide key={releases.item.id}>
                  <NewRelease
                  id={releases.item.id} 
                  title={releases.item.name} 
                  src={releases.item.cover_art_thumbnail_url} 
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
 
export default NewReleases;