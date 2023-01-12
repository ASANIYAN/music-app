import Head from 'next/head'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import NavbarDesktop from '../components/navbar/NavbarDesktop'
import HeartIcon from '../public/icon/HeartIcon'
import TopChartsSwiper, { ChartHeadingMobile } from '../components/TopChartsSwiper'
import NewReleases, { NewReleasesHeading } from '../components/NewReleases'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useFetchRecommendations from '../components/hooks/useFetchRecommendations'
import { ChartProps } from '../props/types'
import { useMyStore } from '../components/app/store'



const Chart = ({ title, artist, duration, src, type, id }: ChartProps) => {

  const addLikes = useMyStore((state: any) => state.addLikes);
  const removeLikes = useMyStore((state: any) => state.removeLikes);
  const likes = useMyStore((state: any) => state.likes);
  console.log(likes);
  const [like, setLike] = useState(false);

  const handleLike = ( title: string, artist: string, src: string, type: string, id: number ) => {
    setLike(like => !like)
    if(like) {
      addLikes(title, artist, src, type, id);
    }
    removeLikes(id);
  };

  return (
  <>
      <section className='bg-navbar rounded-[20px] flex justify-between py-3 px-5 w-[360px] mt-4 cursor-pointer hover:shadow-md'>
        <section className='flex'>
          <Image src={src} width={70} height={10} className="rounded-lg" alt={"music_image"} />
          <div className='font-normal ml-3'>
            <p className=' text-[17px] title truncate max-w-[200px]'> {title} </p>
            <p className='text-[12px] text-color2 artist'> {artist} </p>
            <p className='text-[12px] block duration'> {duration} </p>
          </div>
        </section>
        
        <div className='h-[65px] flex justify-center items-center'>
          <HeartIcon color='#E5524A' like={like} handleLike={() =>handleLike(title, artist, src, type, id)} />
        </div>
      </section>
  </>
  )
}

export default function Home() {

  // queries
  const { data:recommendation, status } = useFetchRecommendations();


  const [openNav, setOpenNav] = useState(false);
  const HandleClick = () => {
    setOpenNav(true);
  };


  return (
    <>
      <section className=''>

        <section className='mt-4 sm:mt-8 sm:flex'>
          <NavbarDesktop />
          
          <section className='xl:flex xl:justify-between'>
            <div className='hidden sm:block'>
              <Image src={"/images/hero_Home.svg"} width={850} height={50} alt={"hero-image"} className="pl-6 h-full" />
            </div>
          
          <section className='hidden xl:block ml-4'>
            <h3 className='text-2xl font-semibold flex'>Top Recommendations</h3>

            { status === "loading" && 
              <Skeleton 
                width={360} 
                height={90}
                count={3} 
                borderRadius={'1.25rem'} 
                duration={2} 
                baseColor={"#1A1E1F"} 
                highlightColor={"rgba(239, 238, 224, 0.25)"} 
                className="mt-4"
              /> 
            }
            
            { status === 'success' && recommendation?.song_recommendations?.recommendations?.map((item: any) => (
              <Chart 
              key={item.recommended_song.id} 
              title={item.recommended_song.title} 
              artist={item.recommended_song.artist_names} 
              duration={"1:22"}
              id={item.recommended_song.id}
              type={item.recommended_song._type}
              src={item.recommended_song.header_image_thumbnail_url ? 
                item.recommended_song.header_image_thumbnail_url : 
                "/images/Golden.svg"} 
              />
            )) }
          </section>

          </section>
          
          <Image 
          src={"/images/hero_Home_mobile.svg"} 
          width={500} height={70} 
          alt={"hero-image-mobile"} 
          className="mx-auto sm:hidden" 
          />
          

        </section>
        
        <section className='mt-8 xl:hidden'>
          <ChartHeadingMobile />
          <TopChartsSwiper />
        </section>

        <section className='mt-10'>
          <NewReleasesHeading />
          <NewReleases />
        </section>

      </section>
    </>
  )
}
