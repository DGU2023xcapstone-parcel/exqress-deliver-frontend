import { ReactNode } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";

export const useHandleModal = () => {
  const [, setModalState] = useRecoilState(modalState);

  const handleOpenModal = (isSuccess: boolean, content: ReactNode) => {
    setModalState({ isOpen: true, isSuccess: isSuccess, content: content });
  };
  const handleCloseModal = () => {
    setModalState({ isOpen: false, isSuccess: false, content: null });
  };

  return { handleOpenModal, handleCloseModal };
};
