import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastConfig = (name) => {
    toast.success(name, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default ToastConfig