import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link group flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-primary hover:bg-white/[0.08] transition-all duration-300"
        rel="noreferrer"
        target="_blank"
      >
        <Image 
          src={`/social/${el}.svg`} 
          alt={el} 
          width={24} 
          height={24} 
          className="transition-all duration-300 brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-110"
        />
      </a>
    ));

  return (
    <footer className="w-full relative py-24 overflow-hidden border-t border-white/5">
      {/* Footer Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-accent-primary/10 -z-1"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Let&apos;s Build the <span className="text-gradient">Future.</span>
            </h2>
            <p className="text-white/50 font-medium leading-relaxed mb-8">
              Open for architectural consultations, lead engineering roles, and system scaling challenges.
            </p>
            <div className="flex gap-4">
              {renderSocialLinks()}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
             <a 
              href={`mailto:${EMAIL}`} 
              className="text-2xl md:text-4xl font-display font-black text-white hover:text-accent-primary transition-colors mb-6 block tracking-tight"
             >
              {EMAIL}
             </a>
             <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">
               © {new Date().getFullYear()} Surya Thakur • Lead Software Engineer
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
