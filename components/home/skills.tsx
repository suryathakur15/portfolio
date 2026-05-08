import { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { MENULINKS, SKILLS } from "../../constants";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, y: 30, duration: 0.8, stagger: 0.2 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 80%",
      animation: revealTl,
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);
    return () => revealAnimationRef.kill();
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col mb-16">
      <p className="text-accent-primary font-display font-semibold tracking-widest uppercase mb-4 seq">TECHNICAL STACK</p>
      <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 seq">
        Mastering the <span className="text-gradient">Digital Realm</span>
      </h1>
      <p className="text-xl opacity-70 max-w-2xl seq">
        From architecting scalable backends to crafting pixel-perfect interfaces, 
        I leverage a diverse set of technologies to build high-performance systems.
      </p>
    </div>
  );

  const SkillCard = ({ title, skills, className = "" }: { title: string, skills: string[], className?: string }) => (
    <div className={`glass-card group overflow-hidden relative ${className} seq`}>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-accent-primary/20"></div>
      <h3 className="text-xl font-display font-bold mb-6 text-white/90">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill} className="flex flex-col items-center group/skill w-20 md:w-24">
            <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-xl flex items-center justify-center p-3 transition-all duration-300 group-hover/skill:border-accent-primary/50 group-hover/skill:scale-110 relative overflow-hidden">
               {/* Icon Fallback Logic */}
               <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xs text-white/20 uppercase pointer-events-none">
                  {skill.charAt(0)}
               </div>
              <Image
                src={`/skills/${skill.toLowerCase()}.svg`}
                alt={skill}
                width={40}
                height={40}
                onError={(e) => {
                  (e.target as any).style.display = 'none';
                }}
                className="relative z-10 grayscale opacity-70 transition-all duration-300 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 object-contain"
              />
            </div>
            <p className="text-[9px] uppercase font-bold tracking-tighter mt-2 opacity-40 group-hover/skill:opacity-100 transition-opacity duration-300 text-center truncate w-full px-1">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section 
      className="section-container relative" 
      id={MENULINKS[2].ref} 
      ref={targetSection}
    >
      {renderSectionTitle()}
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Backend - Main Card */}
        <SkillCard 
          title="Backend Engineering" 
          skills={SKILLS.core} 
          className="md:col-span-8"
        />
        
        {/* Frontend - Side Card */}
        <SkillCard 
          title="Frontend Development" 
          skills={SKILLS.frontend} 
          className="md:col-span-4"
        />
        
        {/* Cloud - Bottom Left */}
        <SkillCard 
          title="Cloud & DevOps" 
          skills={SKILLS.cloud} 
          className="md:col-span-7"
        />
        
        {/* Design & Others - Bottom Right */}
        <SkillCard 
          title="UI/UX & Design" 
          skills={[...SKILLS.userInterface, ...SKILLS.other]} 
          className="md:col-span-5"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
