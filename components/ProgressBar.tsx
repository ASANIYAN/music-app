const ProgressBar = () => {
    //remember to add useEffect here
    const value = 90;
    return (
        <div className="h-[4px] bg-color7 max-w-[500px]  lg:max-w-[700px] mx-auto rounded-[42px]">
            <div className={`h-full bg-color4 rounded-[42px]`} style={{width: `${value}%`}}>
            </div>
        </div>
    );
}
 
export default ProgressBar;