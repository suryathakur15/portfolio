import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initAboutAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, y: 40, duration: 1, stagger: 0.3 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 70%",
      animation: revealTl,
    });
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(targetSection);
    return () => aboutScrollTriggerInstance.kill();
  }, [targetSection]);

  return (
    <section 
      className="section-container relative py-32" 
      ref={targetSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="seq">
          <p className="text-accent-primary font-display font-semibold tracking-widest uppercase mb-4">WHO I AM</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Engineering <br />
            <span className="text-gradient">Digital Excellence</span>
          </h2>
          <div className="space-y-6 text-xl opacity-80 leading-relaxed">
            <p>
              I am a passionate Fullstack Engineer who bridges the gap between ideas and software solutions. 
              My journey is fueled by a relentless curiosity and a commitment to crafting systems that are not 
              just functional, but truly impactful.
            </p>
            <p>
              I take pride in architecting highly available, consistent, and resilient systems. 
              Whether it's a pixel-perfect frontend or a complex microservice architecture, 
              I ensure every detail aligns with the ultimate goal of delivering a superior user experience.
            </p>
          </div>
        </div>
        
        <div className="seq relative">
          <div className="glass-card p-10 relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-3xl">🚀</div>
                <div>
                  <h4 className="text-xl font-display font-bold">Innovation First</h4>
                  <p className="opacity-60">Always exploring new horizons</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-3xl">🛠️</div>
                <div>
                  <h4 className="text-xl font-display font-bold">Scalable Architecture</h4>
                  <p className="opacity-60">Built to handle the future</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-tertiary/10 flex items-center justify-center text-3xl">💎</div>
                <div>
                  <h4 className="text-xl font-display font-bold">Aesthetic Design</h4>
                  <p className="opacity-60">Beauty meets functionality</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute -right-4 -bottom-4 w-full h-full border border-accent-primary/20 rounded-2xl -z-1 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
