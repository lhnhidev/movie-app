import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export default function useModalContext() {
  return useContext(ModalContext);
}
