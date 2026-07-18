import { useEffect, useRef } from "react";

export function useScrollJacking(onScroll: (direction: 1 | -1) => void, cooldown: number = 1500) {
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      if (Math.abs(e.deltaY) > 20) {
        isScrolling.current = true;
        onScroll(e.deltaY > 0 ? 1 : -1);
        setTimeout(() => {
          isScrolling.current = false;
        }, cooldown);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); 
      if (isScrolling.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        isScrolling.current = true;
        onScroll(deltaY > 0 ? 1 : -1);
        setTimeout(() => {
          isScrolling.current = false;
        }, cooldown);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        isScrolling.current = true;
        onScroll(1);
        setTimeout(() => { isScrolling.current = false; }, cooldown);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        isScrolling.current = true;
        onScroll(-1);
        setTimeout(() => { isScrolling.current = false; }, cooldown);
      }
    };

    // Use passive: false to allow e.preventDefault()
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onScroll, cooldown]);
}
