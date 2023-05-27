import { ReactNode } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";

export const useHandleModal = () => {
  const [, setModalState] = useRecoilState(modalState);

  const handleOpenModal = (newContent: ReactNode) => {
    setModalState({ isOpen: true, content: newContent });
  };
  const handleCloseModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  return { handleOpenModal, handleCloseModal };
};
