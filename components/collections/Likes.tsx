import { useMyStore } from "../app/store";

const Likes = () => {
   
    const likes = useMyStore((state:any) => state.likes );

    return (
        <>
            { likes.length > 0 && 
                <section className="grid grid-cols-collection gap-6 w-full">
                    {
                        likes.map((item: any) => (
                        <div 
                        key={item.id} 
                        className={`h-[240px] w-full rounded-[20px]`}
                        style=
                        {{
                            background: `url(${item.src})`,
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat', 
                            backgroundPosition: 'center'
                        }}
                        >
                            <div className="flex flex-col justify-end pl-6 pb-6 h-full">
                                <p className="text-lg md:text-2xl"> {item.title} </p>
                                <p className="text-[10px] -mt-1"> {item.artist} </p>
                            </div>
                        </div>
                    ))}
                </section>
            }
            { likes.length === 0 && ( 
                <p className="text-2xl text-center"> You currently have no liked Item </p>
            )}
        </>
    );
}
 
export default Likes;