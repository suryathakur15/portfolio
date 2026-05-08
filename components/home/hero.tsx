import { EMAIL, MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import HeroImage from "./hero-image";

import styles from "./Home.module.scss";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};

const HeroSection = React.memo(() => {
  const typedSpanElement: MutableRefObject<HTMLSpanElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initTypeAnimation = (
    typedSpanElement: MutableRefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
    });
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    
    gsap.to(targetSection.current, { opacity: 1, duration: 1 });
    gsap.from(targetSection.current.querySelectorAll(".seq"), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    return () => typed.destroy();
  }, []);

  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:scale-125 transition-all duration-300 mr-6 opacity-60 hover:opacity-100 group"
        rel="noreferrer"
        target="_blank"
      >
        <Image 
          src={`/social/${el}.svg`} 
          alt={el} 
          width={24} 
          height={24} 
          className="invert group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,1)] transition-all" 
        />
      </a>
    ));

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className="w-full relative py-32 section-container min-h-screen flex flex-col justify-center overflow-hidden"
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {/* Dynamic Background Elements - High Contrast */}
      <div className="absolute top-0 right-0 w-full h-full -z-1 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[700px] h-[700px] bg-accent-primary/20 rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute bottom-[5%] left-[-5%] w-[600px] h-[600px] bg-accent-secondary/20 rounded-full blur-[120px] opacity-30"></div>
        
        {/* Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center md:text-left mt-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-10 seq shadow-lg shadow-amber-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">Currently Architecting Neary.in</span>
          </div>

          <h2 className="text-xl md:text-2xl font-display font-semibold text-accent-primary mb-6 seq uppercase tracking-[0.4em]">
            System Architect & Lead Engineer
          </h2>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold seq leading-[1.05] mb-8 tracking-tight">
            Architecting <br />
            <span className="text-gradient">the Future.</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-white/50 mb-10 max-w-2xl seq tracking-wide min-h-[2rem]">
            Specializing in <span className="text-accent-primary font-bold whitespace-nowrap" ref={typedSpanElement}></span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-10 seq mb-16">
            <Button
              type={ButtonTypes.PRIMARY}
              name="Let's Connect"
              href={SOCIAL_LINKS.linkedin}
              otherProps={{ target: "_blank", rel: "noreferrer" }}
              classes="px-8 py-3.5 text-base rounded-xl shadow-xl shadow-accent-primary/20 hover:scale-105 transition-all duration-300 font-bold tracking-tight"
            ></Button>
            
            <div className="flex items-center">
              {renderSocialLinks()}
            </div>
          </div>
        </div>

        {/* Creative Abstract UI Element - High visibility System Visual */}
        <div className="hidden lg:flex flex-1 justify-end seq">
           <div className="relative w-[450px] h-[450px]">
              <div className="absolute inset-0 border-[3px] border-accent-primary/40 rounded-[40px] rotate-12 animate-spin-slow shadow-[0_0_60px_rgba(99,102,241,0.2)]"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-[40px] -rotate-12"></div>
              
              <div className="absolute inset-16 glass-card rounded-3xl flex flex-col p-10 border-white/30 bg-white/[0.05] shadow-2xl backdrop-blur-3xl">
                 <div className="flex gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                 </div>
                 <div className="space-y-6">
                    <div className="h-2.5 w-3/4 bg-white/30 rounded-full"></div>
                    <div className="h-2.5 w-1/2 bg-white/20 rounded-full"></div>
                    <div className="h-2.5 w-full bg-accent-primary/50 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
                    <div className="h-2.5 w-2/3 bg-white/25 rounded-full"></div>
                 </div>
                 <div className="mt-auto pt-8 border-t border-white/20 flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                       <div className="text-[11px] font-black text-white/60 uppercase tracking-widest">Distributed Systems</div>
                       <div className="text-sm font-bold text-white/90">AI Orchestration</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-accent-primary/30 text-[10px] font-black text-accent-primary uppercase tracking-tighter border border-accent-primary/40 shadow-lg shadow-accent-primary/20">
                       Scale: 20M+
                    </div>
                 </div>
              </div>
              
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-primary/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
