import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import NavbarDesktop from "../../components/navbar/NavbarDesktop";
import SongItem from "../../components/SongItem";

const AlbumInfo = () => {
    
    const songs = 
    [
        {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:45", type: "single", src:"/images/Golden.svg"}, 
        {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01", type: "single", src:"/images/Tomorrow.svg"},
        {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02", type: "single", src:"/images/Reggae.svg"}, 
        {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:25", type: "single", src:"/images/Tomorrow.svg"}
    ]

    return (
        <>

        <section className='mt-4 sm:mt-8 sm:flex h-screen z-50'>
          <NavbarDesktop />
          
          <section className="w-full">

            <section className='flex flex-col md:flex-row md:-mt-2 mb-6'>
                <div className=''>
                <Image src={"/images/Lead-image.svg"} width={280} height={280} alt={"album-image"} className="sm:pl-6" />
                </div>
                
                <section className="mt-16 sm:ml-6 text-left">
                    <h1 className="title text-[#A4C7C6] font-semibold text-2xl sm:text-4xl"> Tomorrow tunes </h1>
                    <div className="text-color1 text-sm font-normal">
                        <p className="max-w-md mt-2">  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis  </p>
                        <div className="mt-1">
                            <span className="song_count">64 songs -</span><span className="total_Time"> 16hrs+</span>
                        </div>
                    </div>
                    <section className="text-white mt-6 flex md:justify-start ">
                        <button className="p-2 sm:p-3.5 bg-color8 flex items-center backdrop-blur-lg rounded-[32px] mr-3"> 
                            <BsFillPlayFill className="bg-color4 text-white rounded-3xl text-xl sm:text-2xl text-center p-1 mr-2.5" />  Play all 
                        </button>
                        <button className="p-2 sm:p-3.5 bg-color8 flex items-center backdrop-blur-lg rounded-[32px]"> 
                            <MdPlaylistAdd className="bg-color4 text-white rounded-3xl text-xl sm:text-2xl text-center p-1 mr-2.5" />  
                            Add to collection 
                        </button>
                    </section>
                </section>
            </section>

            { songs.map((song, index) => (
                <section key={index}  className="z-10 mt-2 md:ml-4">
                    <SongItem title={song.title} artist={song.artist} duration={song.duration} src={song.src} type={song.type} />
                </section>
            ))} 
          </section>
                    
        </section>

        </>
    );
}
 
export default AlbumInfo;