import { toast } from "react-toastify";
import { toastSuccessConfig } from "./toastConfig";


export const SuccessToast = (info = 'Added Successfully', pos = 'TOP_CENTER') => {
    toast(info, { ...toastSuccessConfig, position: toast.POSITION[pos] });
}