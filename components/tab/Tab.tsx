import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

type TabProps = {
    tabs: tabList[],
    activeTab: string,
    setActiveTab: (activeTab: string) => void,
};

type tabList = {
    name: string,
    alias: string,
};



const Tab = ({ tabs, activeTab, setActiveTab }: TabProps ) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const param = searchParams.get('tab');
    
  const onTab = (alias: string) => {
    setActiveTab(alias);
    router.push(`${router.pathname}?tab=${alias}`);
  };

  
  useEffect(() => {
    if (tabs.some((tab) => tab.alias === param) && param !== null) {
      setActiveTab(param);
    } else {
      setActiveTab(tabs[0].alias);
    }
  }, [param]);
    
    return (
        <>
            <section className="flex">
                { tabs.map((tab) => (
                    <div
                    onClick={() => onTab(tab.alias)}
                    key={tab.alias} 
                    className={`rounded-[27px] transition ease-linear delay-100 cursor-pointer
                    ${ activeTab === tab.alias ? 'text-color5 bg-color4 border-color4' : 'text-color1 border-color1'}
                    border text-center px-4 text-sm py-2 mr-3`}
                    >
                        <p> {tab.name} </p>
                    </div>
                ))}
            </section>
        </>
    );
}
 
export default Tab;