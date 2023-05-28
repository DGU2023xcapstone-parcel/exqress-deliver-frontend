import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/toast.css";

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
  };

  switch (type) {
    case "success":
      return toast.success(message, config);
    case "error":
      return toast.error(message, config);
    case "warning":
      return toast.warning(message, config);
    default:
      return toast(message, config);
  }
  // 3-1. 성공, 실패, 경고, default 케이스마다 토스트 메세지의 마크가 다르게 표시된다.
};

export default useCustomToast;
