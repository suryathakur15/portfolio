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
          className="invert brightness-[2.5] opacity-100 group-hover:brightness-[3] transition-all"
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
            <div className="relative w-[460px] h-[460px] group/card">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 border-[3px] border-accent-primary/20 rounded-[40px] rotate-12 group-hover/card:rotate-[15deg] group-hover/card:border-accent-primary/40 transition-all duration-700 animate-spin-slow shadow-[0_0_60px_rgba(99,102,241,0.1)]" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-[40px] -rotate-12 group-hover/card:-rotate-[15deg] transition-all duration-700" />

              {/* Main Card */}
              <div className="absolute inset-12 glass-card rounded-3xl flex flex-col p-8 bg-[#0c0c0e]/80 shadow-2xl backdrop-blur-3xl border border-white/10 overflow-hidden relative group-hover/card:shadow-accent-primary/20 transition-all duration-500">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-white/20 tracking-tighter uppercase">system_v2.0.sh</div>
                </div>

                {/* ── Default View (Diagram + Stats) ── */}
                <div className="flex-1 flex flex-col transition-all duration-500 group-hover/card:opacity-0 group-hover/card:scale-95 group-hover/card:blur-sm">
                  {/* Abstract System Diagram */}
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30">
                        <div className="w-4 h-4 rounded-full border-2 border-accent-primary animate-pulse" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                        <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="space-y-4">
                      <div className="h-2.5 w-full bg-accent-primary/40 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
                      <div className="flex gap-2">
                        <div className="h-2 w-1/3 bg-white/15 rounded-full" />
                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                      </div>
                      <div className="h-2.5 w-[85%] bg-white/15 rounded-full" />
                    </div>
                  </div>

                  {/* Footer Info (Part of Default View) */}
                  <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">
                        Status: Active
                      </div>
                      <div className="text-xs font-bold text-white/80">
                        AI Integration Layer
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-[14px] font-black text-accent-primary drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                        99.99%
                      </div>
                      <div className="text-[8px] text-white/20 uppercase font-bold tracking-tighter">Uptime Target</div>
                    </div>
                  </div>
                </div>

                {/* ── Hover View (Code Terminal) ── */}
                <div className="absolute inset-x-8 top-20 bottom-8 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100 flex flex-col pointer-events-none">
                  <div className="font-mono text-[11px] space-y-3 leading-relaxed">
                    <div className="flex gap-2">
                      <span className="text-accent-primary tracking-tighter">❯</span>
                      <span className="text-green-400 overflow-hidden whitespace-nowrap animate-typing border-r-2 border-green-400">architect --deploy neary</span>
                    </div>
                    <div className="text-white/40 delay-500 animate-fade-in">Initializing distributed cluster...</div>
                    <div className="text-white/60 font-bold animate-fade-in delay-700">
                      <span className="text-blue-400">LoadBalancer:</span> 20M+ connected
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-white/[0.03] border border-white/5 space-y-2 animate-fade-in delay-1000">
                      <div className="text-purple-400 italic font-medium">// Optimization Loop</div>
                      <code className="text-white/70 block leading-normal">
                        <span className="text-accent-primary font-bold">func</span> <span className="text-blue-300">Scale</span>() &#123; <br />
                        &nbsp;&nbsp;<span className="text-purple-400">for</span> &#123; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;neary.<span className="text-green-300">Sync</span>() <br />
                        &nbsp;&nbsp;&#125; <br />
                        &#125;
                      </code>
                    </div>
                    <div className="mt-auto text-[10px] text-accent-primary/60 animate-pulse">
                      &gt; SYSTEM_READY_FOR_TRAFFIC
                    </div>
                  </div>
                </div>

                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] group-hover/card:opacity-[0.05] transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
              </div>

              {/* Floating Orbs */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-primary/20 rounded-full blur-3xl animate-pulse group-hover/card:bg-accent-primary/40 transition-all duration-700" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse delay-1000 group-hover/card:bg-accent-secondary/40 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-typing {
          animation: typing 1.5s steps(30, end), blink 0.8s step-end infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
