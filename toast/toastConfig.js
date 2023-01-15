import { BsFillCheckCircleFill } from 'react-icons/bs';

export const toastSuccessConfig = {
  icon: <BsFillCheckCircleFill size={30} className='text-green-400' />,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
  autoClose: 3000,
  // theme: "dark",
};

export const toastErrorConfig = {
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
};