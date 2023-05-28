import { ReactNode } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";

/**
 * 모달창을 핸들링 할 수있는 핸들러는 반환하는 hook
 * @returns 모달을 키는 함수, 닫는 함수
 */
export const useModal = () => {
  const [, setModalState] = useRecoilState(modalState);

  const handleOpenModal = (content: ReactNode) => {
    setModalState({ isOpen: true, content: content });
  };
  const handleCloseModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  return { handleOpenModal, handleCloseModal };
};
