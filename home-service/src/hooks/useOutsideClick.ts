import { useEffect, RefObject } from "react";

function useOutsideClick(ref: RefObject<HTMLElement>, onClose: () => void, triggerAttr?: string) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (ref.current && ref.current.contains(target)) {
        return;
      }

      if (triggerAttr && target.getAttribute("data-button") === triggerAttr) {
        return;
      }

      onClose();
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onClose, triggerAttr]);
}

export default useOutsideClick;
