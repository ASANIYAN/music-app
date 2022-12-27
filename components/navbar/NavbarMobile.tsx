import Link from "next/link";
import { RiRadio2Fill } from "react-icons/ri";
import { BsFillCollectionPlayFill, BsFillFileMusicFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ProfileIcon from "../../public/icon/ProfileIcon";
import HomeIcon from "../../public/icon/HomeIcon";
import LogoutIcon from "../../public/icon/LogoutIcon";
import { useState } from "react";

type NavProp = {
    open: boolean,
    setOpen: (open: boolean) => void,
};

const NavbarMobile = ({ open, setOpen }: NavProp) => {

    const [homeHover, setHomeHover] = useState(false);
    const [profileHover, setProfileHover] = useState(false);
    const [logoutHover, setLogoutHover] = useState(false);


    const handleClose = () => {setOpen(false)};

    return (
    <nav className={`bg-navbar ${open ? 'w-full' : 'w-0'} w-full h-full fixed top-0 left-0 z-10 transition-all sm:hidden`} >
        <section className={`${open ? 'block' : 'hidden'} transition-all`}>
            <section className="mt-4 w-full flex justify-end">
                <AiOutlineClose onClick={handleClose} className="text-xl mr-2 text-color6 cursor-pointer"/>
            </section>
            
            <ul className="flex flex-col mt-3 ml-5 font-bold text-[1.0625rem] text-color6">
                <li className="w-fit">
                    <Link href={"/"} className="flex mt-6 hover:text-color4" onMouseEnter={() => setHomeHover(true)} onMouseLeave={() =>  setHomeHover(false)}> 
                        <span className="mr-6 mt-1"> <HomeIcon color={`${homeHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`} /> </span> 
                        <span className="pt-0.5"> Home </span>   
                    </Link> 
                </li>

                <li className="w-fit"> <Link href={"/collections"} className="flex mt-6 hover:text-color4"> <span className="mr-6 mt-1"> <BsFillCollectionPlayFill /> </span>  My collections </Link> </li>
                
                <li className="w-fit"> <Link href={"/"} className="flex mt-6 hover:text-color4"> <span className="mr-6 mt-1"> <RiRadio2Fill /> </span> Radio </Link> </li>
                
                <li className="w-fit"> <Link href={"/"} className="flex mt-6 hover:text-color4"> <span className="mr-6 mt-1"> <BsFillFileMusicFill /> </span> Music videos </Link> </li>
                
                <li className="w-fit"> 
                    <Link href={"/"} className="flex mt-6 hover:text-color4" onMouseEnter={() => setProfileHover(true)} onMouseLeave={() =>  setProfileHover(false)}> 
                        <span className="mr-4 -ml-1"> <ProfileIcon color={`${profileHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`}/> </span> 
                        <span className="pt-1"> Profile </span> 
                    </Link> 
                </li>
                
                <li className="w-fit"> 
                    <Link href={"/"} className="flex mt-6 hover:text-color4" onMouseEnter={() => setLogoutHover(true)} onMouseLeave={() =>  setLogoutHover(false)}> 
                        <span className="mr-4"> <LogoutIcon color={`${logoutHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`}/> </span> Log out 
                    </Link> 
                </li>
            </ul>
        </section>
    </nav>
    );
}
 
export default NavbarMobile;