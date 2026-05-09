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
    typedSpanElement: MutableRefObject<HTMLSpanElement>,
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

  const SOCIAL_HOVER_STYLES: Record<string, string> = {
    linkedin: "hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50",
    github: "hover:bg-white/10 hover:border-white/50",
    instagram: "hover:bg-[#e4405f]/10 hover:border-[#e4405f]/50",
    facebook: "hover:bg-[#1877f2]/10 hover:border-[#1877f2]/50",
    twitter: "hover:bg-[#1da1f2]/10 hover:border-[#1da1f2]/50",
    topmate: "hover:bg-[#f59e0b]/10 hover:border-[#f59e0b]/50",
    medium: "hover:bg-white/10 hover:border-white/50",
  };

  const renderSocialLinksGroup = (slice?: [number, number]): React.ReactNode => {
    const keys = Object.keys(SOCIAL_LINKS).slice(slice?.[0], slice?.[1]);
    return keys.map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={`relative w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 transition-all duration-300 group ${SOCIAL_HOVER_STYLES[el] || "hover:bg-accent-primary/20 hover:border-accent-primary/50"}`}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={`/social/${el}.svg`}
          alt={el}
          width={20}
          height={20}
          className="invert brightness-[2] opacity-80 group-hover:opacity-100 transition-all"
        />
      </a>
    ));
  };

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className="w-full relative min-h-screen flex flex-col justify-center overflow-hidden"
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {/* ── Full-viewport background layer ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Ambient glows */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent-primary/10 rounded-full blur-[100px] opacity-40 md:hidden" />
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-accent-primary/20 rounded-full blur-[140px] opacity-30" />
        <div className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] bg-accent-secondary/15 rounded-full blur-[120px] opacity-30" />
        {/* Dot grid — covers full viewport */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* ── Constrained content ── */}
      <div className="section-container py-24 md:py-32 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center md:text-left mt-12">
            <div className="inline-flex items-center p-[1px] rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/20 mb-10 seq relative group overflow-hidden shadow-2xl shadow-amber-500/10">
              {/* Rotating border effect - Always active */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#f59e0b_50%,transparent_80%)] animate-[spin_3s_linear_infinite] opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-center gap-2.5 px-4 py-2 rounded-[15px] bg-[#0c0c0e]/95 backdrop-blur-xl">
                <div className="flex items-center justify-center relative">
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-amber-500/30 animate-ping" />
                  <div className="relative w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-500 whitespace-nowrap">
                  Currently Architecting <span className="text-white">Neary.in</span>
                </span>
              </div>
            </div>

            <h2 className="text-sm sm:text-lg md:text-2xl font-display font-semibold text-accent-primary mb-6 seq uppercase tracking-[0.1em] sm:tracking-[0.4em] max-w-full leading-snug">
              Lead Engineer
            </h2>

            <h1 className="text-3xl sm:text-6xl md:text-8xl font-display font-bold seq leading-tight mb-8 tracking-tight break-words">
              Architecting <br />
              <span className="text-gradient font-accent text-4xl sm:text-7xl md:text-9xl lowercase">
                the Future.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl font-medium text-white/50 mb-10 max-w-2xl seq tracking-wide min-h-[2rem]">
              Specializing in{" "}
              <span
                className="text-accent-primary font-bold whitespace-nowrap"
                ref={typedSpanElement}
              />
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 seq mb-16 w-full">
              <Button
                type={ButtonTypes.PRIMARY}
                name="Let's Connect"
                href={SOCIAL_LINKS.linkedin}
                otherProps={{ target: "_blank", rel: "noreferrer" }}
                classes="px-4 py-2.5 text-[12px] sm:px-8 sm:py-3.5 sm:text-base rounded-xl shadow-xl shadow-accent-primary/20 hover:scale-105 transition-all duration-300 font-bold tracking-tight whitespace-nowrap w-auto"
              />
              {/* Mobile: Two rows | Desktop: Single row */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
                  {renderSocialLinksGroup([0, 4])}
                </div>
                <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-start">
                  {renderSocialLinksGroup([4, 8])}
                </div>
              </div>
            </div>
          </div>

          {/* Architectural system visual */}
          <div className="hidden lg:flex flex-1 justify-end seq">
            <div className="relative w-[440px] h-[440px]">
              <div className="absolute inset-0 border-[3px] border-accent-primary/40 rounded-[40px] rotate-12 animate-spin-slow shadow-[0_0_60px_rgba(99,102,241,0.2)]" />
              <div className="absolute inset-0 border-2 border-white/15 rounded-[40px] -rotate-12" />

              <div className="absolute inset-16 glass-card rounded-3xl flex flex-col p-10 bg-white/[0.04] shadow-2xl backdrop-blur-3xl">
                <div className="flex gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg" />
                </div>
                <div className="space-y-5">
                  <div className="h-2.5 w-3/4 bg-white/25 rounded-full" />
                  <div className="h-2.5 w-1/2 bg-white/15 rounded-full" />
                  <div className="h-2.5 w-full bg-accent-primary/50 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                  <div className="h-2.5 w-2/3 bg-white/20 rounded-full" />
                </div>
                <div className="mt-auto pt-6 border-t border-white/15 flex justify-between items-center">
                  <div>
                    <div className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">
                      Distributed Systems
                    </div>
                    <div className="text-sm font-bold text-white/90">
                      AI Orchestration
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-accent-primary/20 text-[10px] font-black text-accent-primary uppercase tracking-tight border border-accent-primary/30 shadow-lg shadow-accent-primary/10">
                    Scale: 20M+
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent-primary/25 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-accent-secondary/25 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
