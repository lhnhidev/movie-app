import { useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

export default function ModalProvider({ children }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowing]);

  return (
    <ModalContext.Provider value={{ isShowing, setIsShowing }}>
      {children}
      {isShowing && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-slate-600/60 text-white"
          onClick={() => setIsShowing(false)}
        >
          <p onClick={(e) => e.stopPropagation()}>This is modal provider</p>
        </div>
      )}
    </ModalContext.Provider>
  );
}
