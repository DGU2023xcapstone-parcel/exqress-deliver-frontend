import { ReactNode } from "react";
import { atom } from "recoil";

interface ModalStateType {
  isOpen: boolean;
  isSuccess: boolean;
  content: ReactNode;
}
export const modalState = atom<ModalStateType>({
  key: "modalState",
  default: { isOpen: false, isSuccess: false, content: null },
});
