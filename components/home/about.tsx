import { gsap } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HIGHLIGHTS = [
  { value: "7+", label: "Years shipping production systems" },
  { value: "20M+", label: "Users on platforms I've built" },
  { value: "100K+", label: "Req/min sustained throughput" },
  { value: "5", label: "High-impact products shipped" },
];

const AboutSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(targetSection.current.querySelectorAll(".seq"), {
      scrollTrigger: { trigger: targetSection.current, start: "top 75%" },
      opacity: 0,
      y: 36,
      duration: 0.9,
      stagger: 0.18,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="section-container py-24 md:py-32 relative"
      ref={targetSection}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ── Left: text ── */}
        <div className="seq">
          <p className="text-accent-primary font-accent text-2xl mb-2">
            Who I am
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Building systems <br />
            <span className="text-gradient">that matter.</span>
          </h2>
          <div className="space-y-6 text-xl opacity-80 leading-relaxed">
            <p>
              I&apos;m a Lead Software Engineer obsessed with distributed
              systems, real-time architectures, and the craft of turning
              ambitious ideas into production-grade software that scales.
            </p>
            <p>
              Currently spearheading engineering at{" "}
              <span className="text-white font-medium">HighLevel</span> and
              building <span className="text-amber-400 font-medium">Neary</span>,
              an AI-powered social discovery platform, from the ground up.
            </p>
          </div>
        </div>

        {/* ── Right: stat grid ── */}
        <div className="seq grid grid-cols-2 gap-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="glass-card p-6 md:p-8 flex flex-col gap-2 group hover:border-accent-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent-primary/5 rounded-full blur-2xl group-hover:bg-accent-primary/15 transition-all duration-500" />
              <span className="text-3xl md:text-4xl font-display font-black text-gradient leading-none">
                {h.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-white/45 leading-snug group-hover:text-white/65 transition-colors">
                {h.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
