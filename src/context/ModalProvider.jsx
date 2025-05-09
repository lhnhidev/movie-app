import { useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

export default function ModalProvider({ children }) {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState(<></>);

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);

  const openPopup = (newContent) => {
    setIsShowing(true);
    setContent(newContent);
  }

  return (
    <ModalContext.Provider value={{ openPopup }}>
      {children}
      {isShowing && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-slate-600/60 text-white"
          onClick={() => setIsShowing(false)}
        >
          {content}
          {/* <p onClick={(e) => e.stopPropagation()}>This is modal provider</p> */}
        </div>
      )}
    </ModalContext.Provider>
  );
}
