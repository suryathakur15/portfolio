import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  menuVisible,
  setmenuVisible,
}: {
  menuVisible: boolean;
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className="w-full fixed top-0 py-2 select-none z-[500] transition-all duration-300 px-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto bg-obsidian/60 backdrop-blur-2xl rounded-full mt-4 py-2 px-6 shadow-2xl shadow-black/80 border border-white/10">
        <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center font-display font-bold text-xs text-white">
            S
          </div>
          <span className="font-display font-bold text-base tracking-tight hidden sm:block text-white/90">Surya Thakur</span>
        </a>
        <nav className="flex items-center">
          <button
            className="hamburger w-10 h-10 flex items-center justify-center relative z-[510] rounded-full border border-white/10 hover:border-accent-primary transition-all duration-300 bg-white/5"
            onClick={() => setmenuVisible(!menuVisible)}
          >
            <div className="flex flex-col gap-1.2 items-center justify-center">
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${menuVisible ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 mt-1 ${menuVisible ? 'opacity-0' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-white transition-all duration-300 mt-1 ${menuVisible ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
