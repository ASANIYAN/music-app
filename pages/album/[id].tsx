import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { headers } from "../../components/api-headers";
import { useMyStore } from "../../components/app/store";
import NavbarDesktop from "../../components/navbar/NavbarDesktop";
import SongItem from "../../components/SongItem";


export const getStaticPaths = async (): Promise<{
  paths: { params: { id: string } }[];
  fallback: boolean;
}> => {
  const options = {
    method: 'GET',
    headers: headers,
  };
  const res = await fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/albums/?per_page=10&page=1', options);
  const data = await res.json();

  let paths = data?.chart_items?.map((chartItem: any) => {
    return {
        params: { id: chartItem.item.id.toString() }
    }
  });

  return {
    paths,
    fallback: false,
  };
};

type StaticProps = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: StaticProps) => {
  const id = params.id;
  const options = {
    method: 'GET',
    headers: headers,
  };
//   useQuery('releases', fetchTopReleases);
  const res = await fetch(`https://genius-song-lyrics1.p.rapidapi.com/album/appearances/?id=${id}&per_page=20&page=1`, options);
  const data = await res.json();

  return {
    props: {item: data}
  }
};

type albumProp = {
    item: { album_appearances: Array<any> }
}

const AlbumInfo = ({ item }: albumProp) => {
  
  const albumImg = useMyStore((state:any) => state.albumImg);
  const title = useMyStore((state:any) => state.title);
  const fullTitle = useMyStore((state:any) => state.fullTitle);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
      if (item) {
          setIsLoading(false);
      }
  }, [item])

  return (
      <>
        <section className='mt-4 sm:mt-8 sm:flex h-screen z-50'>
          <NavbarDesktop />
          
          <section className="w-full">

            <section className='flex flex-col md:flex-row md:-mt-2 mb-6'>
                <div className=''>
                <Image src={`${albumImg}`} width={280} height={280} alt={"album-image"} className="sm:pl-6" />
                </div>
                
                <section className="mt-16 sm:ml-6 text-left">
                    <h1 className="title text-[#A4C7C6] font-semibold text-2xl sm:text-4xl"> {title} </h1>
                    <div className="text-color1 text-sm font-normal">
                        <p className="max-w-md mt-2"> {fullTitle} </p>
                        <div className="mt-1">
                            <span className="song_count">
                              { item.album_appearances.length } { item.album_appearances.length === 1 ? 'song' : 'songs' } 
                            </span>
                            <span className="total_Time"> </span>
                        </div>
                    </div>
                    <section className="text-white mt-6 flex-col sm:flex-row flex md:justify-start ">
                        <button className="p-2 sm:p-3.5 bg-color8 flex items-center backdrop-blur-lg rounded-[32px] mr-3 w-fit"> 
                            <BsFillPlayFill className="bg-color4 text-white rounded-3xl text-xl sm:text-2xl text-center p-1 mr-2.5" />  Play all 
                        </button>
                        <button className="p-2 sm:p-3.5 bg-color8 flex items-center backdrop-blur-lg rounded-[32px] mt-3 sm:mt-0 w-fit"> 
                            <MdPlaylistAdd className="bg-color4 text-white rounded-3xl text-xl sm:text-2xl text-center p-1 mr-2.5" />  
                            Add to collection 
                        </button>
                    </section>
                </section>
            </section>
            
                { isLoading &&
                    <Skeleton 
                    width={'100%'}
                    height={50}
                    borderRadius={'0.9375rem'} 
                    duration={2} 
                    baseColor={"rgba(51, 55, 59, 0.37)"} 
                    highlightColor={"rgba(239, 238, 224, 0.25)"} 
                    className="z-10 mt-2 md:ml-4"
                    count={4}
                    />
                }

            { !isLoading && item.album_appearances.map((item) => (
                <section key={item.id}  className="z-10 mt-3 md:ml-4">
                    <SongItem
                    id={item.id}
                    title={item.song.title} 
                    artist={item.song.artist_names}
                    path={item.song.api_path} 
                    duration={"1:00"} 
                    src={item.song.song_art_image_thumbnail_url} 
                    type={item.song._type} />
                </section>
            ))} 
          </section>
                    
        </section>

      </>
    );
}
 
export default AlbumInfo;