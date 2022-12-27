const VolumeBar = () => {
    //add useEffect
    const value = 40;
    return (
        <div className="h-[4px] bg-color7 w-[160px] rounded-[42px]">
            <div className={`h-full bg-color4 rounded-[42px]`} style={{width: `${value}%`}}>
            </div>
        </div>
    );
}
 
export default VolumeBar;