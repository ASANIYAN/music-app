type ColorProp = {
    color?: string,
};

const PlayIcon = ({ color="#EFEEE0" } : ColorProp) => {
    return (
        <>
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z" 
                fill={`${color}`}
                />
            </svg>
        </>
    );
}
 
export default PlayIcon;