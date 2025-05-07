import { useContext } from "react";
import ModalProvider from "./ModalProvider";

export default function useModalContext() {
  return useContext(ModalProvider);
}
