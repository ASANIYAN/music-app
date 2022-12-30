import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Courier_Prime } from '@next/font/google';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavbarMobile from '../components/navbar/NavbarMobile';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import Player from '../components/Player';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';

const courier = Courier_Prime({
    subsets: ['latin'],
    variable: '--font-courier',
    weight: ['400','700']
  });

export default function App({ Component, pageProps }: AppProps) {
  
  const queryClient = new QueryClient()
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  
  const HandleClick = () => {
    setOpenNav(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${courier.variable} font-courier`}>
        { router.pathname === '/album/[id]' && 
        <div 
        className='bg-[url(/images/Lead-image.svg)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 bottom-0 right-0 opacity-10 -z-10'
        >
        </div>
        }
        <Player />
        <section className='px-6'>
            <section className='flex justify-between sm:justify-start mt-4'>
              <section className='flex sm:block'>
                <GiHamburgerMenu 
                onClick={HandleClick}
                className='mt-2 text-lg sm:hidden cursor-pointer' 
                />
                <NavbarMobile open={openNav} setOpen={setOpenNav} />
                <Image src={"/images/music_icon.svg"} width={30} height={30} alt={"music-icon"} className="ml-4 sm:ml-0 rounded-[10px]"/>
              </section>
              <SearchBar searchItem='' />
            </section>
          
          <Component {...pageProps} />
        </section>
      </main>
    </QueryClientProvider>
  )
}
