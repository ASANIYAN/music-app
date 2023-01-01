import Head from 'next/head'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import NavbarMobile from '../components/navbar/NavbarMobile'
import NavbarDesktop from '../components/navbar/NavbarDesktop'
import HeartIcon from '../public/icon/HeartIcon'
import TopChartsSwiper, { ChartHeadingMobile } from '../components/TopChartsSwiper'
import NewReleases, { NewReleasesHeading } from '../components/NewReleases'
import { useQuery, useQueryClient } from 'react-query'


type ChartProps = {
  title: string,
  artist: string,
  duration: ReactNode,
  src: string
};


const Chart = ({ title, artist, duration, src }: ChartProps) => {

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(like => !like)
  };

  return (
  <>
    <section className='bg-navbar rounded-[20px] flex justify-between py-3 px-5 w-[360px] mt-4 cursor-pointer hover:shadow-md'>
      <section className='flex'>
        <Image src={src} width={70} height={10} alt={"music_image"} />
        <div className='font-normal ml-3'>
          <p className=' text-[17px] title'> {title} </p>
          <p className='text-[12px] text-color2 artist'> {artist} </p>
          <p className='text-[12px] block duration'> {duration} </p>
        </div>
      </section>
      
      <div className='h-[65px] flex justify-center items-center'>
        <HeartIcon color='#E5524A' like={like} handleLike={handleLike} />
      </div>
    </section>
  </>
  )
}

const fetchSongRecommendations = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PULIC_RAPID_API_KEY as string,
      'X-RapidAPI-Host': process.env.NEXT_PULIC_RAPID_API_HOST as string
    }
  };
  const res = await fetch('https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=2396871', options)
  return res.json();
}

export default function Home() {

  // Access the client
  const queryClient = useQueryClient();

  // queries
  const { data: recommendation, status } = useQuery('recommendations', fetchSongRecommendations);
  console.log(recommendation);

  const [openNav, setOpenNav] = useState(false);
  const HandleClick = () => {
    setOpenNav(true);
  };

  const charts = 
  [
    {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:34:45",  src:"/images/Golden.svg"}, 
    {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
    {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01:25",  src:"/images/Tomorrow.svg"}
  ]

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
            <h3 className='text-2xl font-semibold flex'>Top Charts</h3>
            { charts.map((chart, index) => (
              <Chart key={index} title={chart.title} artist={chart.artist} duration={chart.duration} src={chart.src} />
            )) }
          </section>

          </section>
          
          <Image src={"/images/hero_Home_mobile.svg"} width={500} height={70} alt={"hero-image-mobile"} className="mx-auto sm:hidden" />
          

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
