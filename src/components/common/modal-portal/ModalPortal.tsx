import React from "react";
import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";

import { modalState } from "@/recoil/modal";
import { useModal } from "@/hooks/useModal";
import * as style from "./ModalPortal.style";

const ModalPortal = () => {
  const [{ isOpen, content }] = useRecoilState(modalState);
  const { handleCloseModal } = useModal();

  if (isOpen) {
    const modalRoot =
      typeof window !== "undefined" ? document.getElementById("modal") : null;

    const closeModalByClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const eventTarget = event.target as HTMLElement;
      if (eventTarget.id === "modal_overlay") {
        handleCloseModal();
      }
    };

    setTimeout(() => {
      handleCloseModal();
    }, 1500);

    return modalRoot && content
      ? createPortal(
          <style.Wrapper id="modal_overlay" onClick={closeModalByClick}>
            <style.Box>{content}</style.Box>
          </style.Wrapper>,
          modalRoot
        )
      : null;
  }
  return null;
};

export default ModalPortal;
