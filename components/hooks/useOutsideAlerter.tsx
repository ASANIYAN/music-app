import { useEffect } from "react";

export default function useOutsideAlerter(ref: any, setItem: any) {
  useEffect(() => {
    /**
     * removeTooltip if clicked on outside of parent element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setItem(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}