import { useState } from "react";
import Likes from "../components/collections/Likes";
import MyCollections from "../components/collections/MyCollections";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import Tab from "../components/tab/Tab";
import '../styles/Collections.module.css'

const Collections = () => {
    const tabList = 
    [
        { name: 'My Collection', alias: 'mycollection' },
        { name: 'Likes', alias: 'likes' },
    ];

    const [activeTab, setActiveTab] = useState('mycollection');

    return (
        <>
            <section className='mt-4 sm:mt-8 sm:flex h-screen z-50'>
            <NavbarDesktop />
            
            <section className="w-full md:ml-6">
                <Tab tabs={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="mt-3 w-full">
                    { activeTab === tabList[0].alias && <MyCollections /> } 
                    { activeTab === tabList[1].alias && <Likes /> } 
                </div>

            </section>
                        
            </section>
        </>
    );
}
 
export default Collections;