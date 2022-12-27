import { useState } from 'react';
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import styles from "../styles/Search.module.css"

type SearchProp = {
    searchItem: string,
};

const SearchBar = ({ searchItem } : SearchProp) => {

    const [showSearchBar, setShowSearchBar] = useState(false);
    const OpenSearchBar = () => {
        setShowSearchBar(true);
    };
    const CloseSearchBar = () => {
        setShowSearchBar(false);
    };


    return (
        <form className='sm:w-full sm:ml-10'>
            <section className="hidden sm:flex w-full bg-transparent">
                <CiSearch className='mt-[0.65rem]' />
                <input 
                className="ml-2 py-1.5 pl-2 border-none bg-transparent font-medium text-base outline-none w-full placeholder:text-sm placeholder:font-semibold placeholder:text-color2" 
                type="text" 
                placeholder='Search artists' />
            </section>

            <section className='flex w-full mt-0.5 sm:hidden'>
                <div className={`flex w-full transition-all ${showSearchBar ? "" :"translate-x-[999px]"}`}>
                    <input
                    className="ml-3 py-1 pl-2 border-none bg-transparent font-medium text-base outline-none w-full placeholder:text-sm placeholder:font-semibold placeholder:text-color2" 
                    type="text" 
                    placeholder='Search artists' />
                    <IoIosArrowDroprightCircle 
                    onClick={CloseSearchBar}
                    className='text-4xl text-color4 cursor-pointer' 
                    /> 
                </div> 
                
                <CiSearch 
                onClick={OpenSearchBar}
                className={`text-3xl text-color2 cursor-pointer transition-all ${showSearchBar ? "translate-x-[999px]" :""}`} 
                />
            </section>

        </form>
    );
}
 
export default SearchBar;