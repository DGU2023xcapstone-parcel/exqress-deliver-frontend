import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/toast.css";

/**
 * react-toastify를 커스텀한 hook
 * @param type 어떤 유형의 toast를 띄울건지
 * @param message toast에 어떤 메세지를 띄울건지
 * @returns toast
 */
const useCustomToast = (type: string, message?: string) => {
  const config = {
    position: toast.POSITION.TOP_CENTER,
    className: "custom-toast-width",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    toastId: "myToast",
  };

  switch (type) {
    case "success":
      if (!toast.isActive("myToast")) return toast.success(message, config);
      break;
    case "error":
      if (!toast.isActive("myToast")) return toast.error(message, config);
      break;
    case "warning":
      if (!toast.isActive("myToast")) return toast.warning(message, config);
      break;
    default:
      if (!toast.isActive("myToast")) return toast(message, config);
  }
};

export default useCustomToast;
