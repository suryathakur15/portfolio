import { useEffect, useRef } from "react";
import { IDesktop, isSmallScreen } from "pages";

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop || isSmallScreen()) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty("--x", `${e.clientX}px`);
        cursorRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const onHover = () => cursorRef.current?.classList.add("hover");
    const onUnhover = () => cursorRef.current?.classList.remove("hover");

    const links = document.querySelectorAll("a, button, .link");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out mix-blend-difference bg-white"
      style={{
        transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
      }}
    >
      <style jsx>{`
        .custom-cursor {
          --x: -100px;
          --y: -100px;
        }
        .custom-cursor.hover {
          transform: translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0) scale(4) !important;
          background: white;
          mix-blend-difference: difference;
        }
      `}</style>
    </div>
  );
};

export default Cursor;
