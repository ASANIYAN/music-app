import Link from "next/link";
import { useState } from "react";
import { BsFillCollectionPlayFill, BsFillFileMusicFill } from "react-icons/bs";
import { RiRadio2Fill } from "react-icons/ri";
import HomeIcon from "../../public/icon/HomeIcon";
import LogoutIcon from "../../public/icon/LogoutIcon";
import ProfileIcon from "../../public/icon/ProfileIcon";

const NavbarDesktop = () => {

    const [homeHover, setHomeHover] = useState(false);
    const [profileHover, setProfileHover] = useState(false);
    const [logoutHover, setLogoutHover] = useState(false);

    return (
        <nav className="hidden sm:flex flex-col text-color6 w-fit">
            <ul className="flex flex-col bg-navbar pl-3 py-2 justify-center text-xl rounded-[32px]">
                <li className="mt-3"> 
                    <Link href={"/"} className="hover:text-color4" onMouseEnter={() => setHomeHover(true)} onMouseLeave={() =>  setHomeHover(false)}> 
                        <HomeIcon color={`${homeHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`} /> 
                    </Link> 
                </li>
                
                <li className="mt-5"> <Link href={"/collections"} className="hover:text-color4"> <BsFillCollectionPlayFill /> </Link> </li>
                
                <li className="mt-5"> <Link href={"/"} className="hover:text-color4"> <RiRadio2Fill /> </Link> </li>
                
                <li className="mt-5 mb-3"> <Link href={"/"} className="hover:text-color4"> <BsFillFileMusicFill /> </Link> </li>
            </ul>
            
            <ul className="flex flex-col mt-4 bg-navbar px-2 py-2 justify-center rounded-[32px]">
                <li className="mt-3"> 
                    <Link href={"/"} className="hover:text-color4" onMouseEnter={() => setProfileHover(true)} onMouseLeave={() =>  setProfileHover(false)}> 
                        <ProfileIcon color={`${profileHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`}/>
                    </Link> 
                </li>
                
                <li className="mt-5 mb-3"> 
                    <Link href={"/"} className="hover:text-color4" onMouseEnter={() => setLogoutHover(true)} onMouseLeave={() =>  setLogoutHover(false)}> 
                        <LogoutIcon color={`${logoutHover ? "#FACD66" : "rgba(239, 238, 224, 0.25)"}`} /> 
                    </Link> 
                </li>
            </ul>
        </nav>
    );
}
 
export default NavbarDesktop;