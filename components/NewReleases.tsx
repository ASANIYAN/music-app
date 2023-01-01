import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Pagination } from "swiper";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { useQuery, useQueryClient } from "react-query";

export const NewReleasesHeading = () => {
    return (
        <h3 className="font-semibold text-xl md:text-2xl text-left text-color1"> Top releases. </h3>
    );
}

type ReleaseProps = {
    title: string,
    src: string
};

const NewRelease = ({ title, src } : ReleaseProps ) => {
    return (
    <section className="max-w-[180px]">
        <Image src={src} width={150} height={10} alt={`Release1`} className="rounded-[25px]" />
        <small className="text-[12px] pl-3 font-normal"> {title} </small>
    </section>
    );
}

const fetchTopReleases = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST as string
      }
    };
    
    const res = await fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/albums/?per_page=10&page=1', options);
    return res.json();
  }

const NewReleases = () => { 
    
  // Access the client
  const queryClient = useQueryClient();

  // queries
  const { data:topReleases, status } = useQuery('releases', fetchTopReleases);
  console.log(topReleases.chart_items);

    const releases = 
    [
        {title: "Life in a bubble", src:"/images/Release1.svg"}, 
        {title: "Life in a bubble", src:"/images/Release1.svg"}, 
        {title: "Life in a bubble", src:"/images/Release1.svg"}, 
        {title: "Mountain", src:"/images/Release2.svg"}, 
        {title: "Mountain", src:"/images/Release2.svg"}, 
        {title: "Mountain", src:"/images/Release2.svg"}, 
        {title: "Limits", src:"/images/Release3.svg"},
        {title: "Limits", src:"/images/Release3.svg"},
        {title: "Limits", src:"/images/Release3.svg"},
    ];

    return (
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
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
             { topReleases.chart_items.map((releases:any ) => (
            <SwiperSlide key={releases.item.id}>
                <NewRelease 
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