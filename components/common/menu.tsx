import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MENULINKS } from "../../constants";
import { gsap } from "gsap";

const Menu = ({
  setmenuVisible,
  visible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (visible) {
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current?.querySelectorAll("li"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [visible]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 w-full h-full z-[400] invisible opacity-0 flex items-center justify-center overflow-hidden"
    >
      {/* Ultra Deep Glass Overlay */}
      <div 
        className="absolute inset-0 bg-[#050505]/98 backdrop-blur-3xl"
        onClick={() => setmenuVisible(false)}
      ></div>
      
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-6 overflow-y-auto">
        <ul ref={linksRef} className="flex flex-col gap-2 md:gap-4 text-center w-full px-6" role="menu">
          {MENULINKS.map((el, index) => (
            <li key={el.name + index} role="menuitem" className="overflow-hidden">
              <a
                className="link text-4xl md:text-5xl font-display font-black text-white/10 hover:text-white transition-all duration-500 hover:scale-105 block uppercase tracking-tighter leading-tight py-1"
                href={`#${el.ref}`}
                onClick={() => setmenuVisible(false)}
              >
                {el.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
