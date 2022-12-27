const MyCollections = () => {
    
  const album = 
  [
    {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
    {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:34:45",  src:"/images/Golden.svg"}, 
    {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
    {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01:25",  src:"/images/Tomorrow.svg"},
    {title: "Golden age of 80s", artist: "Sean swadder", duration:"2:34:45",  src:"/images/Golden.svg"}, 
    {title: 'Reggae “n” blues', artist: "Dj YK mule", duration:"1:02:42",  src:"/images/Reggae.svg"}, 
    {title: "Tomorrow’s tunes", artist: "Obi Datti", duration:"2:01:25",  src:"/images/Tomorrow.svg"}
  ]
    return (
        <>
            <section className="grid grid-cols-collection gap-6 w-full">
                {
                    album.map((item, index) => (
                    <div 
                    key={index} 
                    className={`h-[240px] w-full rounded-[20px]`}
                    style={{background: `url(${item.src})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
                    >
                        <div className="flex flex-col justify-end pl-6 pb-6 h-full">
                            <p className="text-lg md:text-2xl"> {item.title} </p>
                            <p className="text-[10px] -mt-1"> {item.artist} </p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
 
export default MyCollections;