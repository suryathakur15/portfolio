import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  Branch,
  BranchNode,
  CheckpointNode,
  ItemSize,
  MENULINKS,
  NodeTypes,
  TIMELINE,
  TimelineNodeV2,
} from "../../constants";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, isSmallScreen } from "pages";

const svgColor = "rgba(255, 255, 255, 0.1)";
const animColor = "#6366f1";
const separation = 450;
const strokeWidth = 3;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

const TimelineSection = ({ isDesktop }: IDesktop) => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: targetSection.current,
        start: "top 80%",
      },
    });

    revealTl.from(targetSection.current.querySelectorAll(".seq"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="w-full relative select-none section-container py-32 flex flex-col justify-center overflow-hidden"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
      {/* Background Depth Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex flex-col mb-24 items-center text-center relative z-10">
        <p className="text-accent-primary font-display font-semibold tracking-[0.3em] uppercase mb-4 seq">MILESTONES</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 seq">
          Engineering <span className="text-gradient">Evolution</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent mb-8 seq"></div>
        <h2 className="text-xl opacity-60 max-w-2xl seq">
          A winding path through architectural challenges, leadership, and system scaling.
        </h2>
      </div>

      <div className="relative mt-12 px-4 md:px-0 z-10">
        {/* Creative Vertical Path with Enhanced Visibility */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px]">
           <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/30 via-accent-secondary/60 to-transparent"></div>
           <div className="absolute inset-0 bg-accent-primary blur-[4px] opacity-30"></div>
           {/* Animated glow point that follows scroll could be cool, but keeping it simple for stability */}
        </div>

        <div className="space-y-28">
          {TIMELINE.map((item, index) => {
            if (item.type !== NodeTypes.CHECKPOINT) return null;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal group seq">
                {/* Visual Connector Dot - More prominent */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-obsidian border-2 border-accent-primary/80 shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20 transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(99,102,241,1)]">
                   <div className="absolute inset-1 rounded-full bg-accent-primary opacity-20 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Card Container */}
                <div className={`
                  ml-12 md:ml-0 w-full md:w-[44%] 
                  ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} 
                  transition-all duration-500 transform group-hover:-translate-y-2
                `}>
                  <div className={`
                    glass-card p-8 md:p-10 relative overflow-hidden group/card border-white/10 bg-white/[0.02]
                    ${isLeft ? 'md:text-right md:border-r-accent-primary/30' : 'md:text-left md:border-l-accent-primary/30'}
                  `}>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="text-accent-primary font-display font-bold text-xs mb-4 block uppercase tracking-widest opacity-80 group-hover:opacity-100">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className={`flex items-center gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                       <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/60 uppercase tracking-tighter group-hover:border-accent-primary/40 group-hover:text-accent-primary/80 transition-all">
                          Experience #{TIMELINE.length - index}
                       </div>
                    </div>

                    {/* Subtle Card Glow */}
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/10 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Date/Year Badge for Desktop - Ultimate Visibility */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 font-display font-black text-[10rem] opacity-[0.08] text-white pointer-events-none select-none transition-all duration-700 group-hover:opacity-[0.25] group-hover:scale-105 group-hover:text-accent-primary
                  ${isLeft ? 'left-[55%]' : 'right-[55%]'}
                `}>
                  {item.subtitle?.split('|')[1]?.trim().split(' ')[1]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

type LinkedTimelineNode = LinkedCheckpointNode | LinkedBranchNode;

type LinkedCheckpointNode = LinkNode & CheckpointNode;

type LinkedBranchNode = LinkNode & BranchNode;

interface LinkNode {
  next?: LinkedTimelineNode;
  prev?: LinkedTimelineNode;
}
