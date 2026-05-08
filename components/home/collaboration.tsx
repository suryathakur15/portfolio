import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EMAIL } from "../../constants";

const CollaborationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(sectionRef.current.querySelectorAll(".cta-reveal"), {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-container py-28 md:py-36 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <span className="cta-reveal inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 text-accent-primary font-display font-bold text-xs uppercase tracking-[0.25em] mb-10">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          Open to Opportunities
        </span>

        {/* Headline */}
        <h2 className="cta-reveal text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter leading-[1.04] mb-8">
          Ready to build{" "}
          <span className="text-gradient">something great</span>{" "}
          together?
        </h2>

        {/* Sub-copy */}
        <p className="cta-reveal text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-14 max-w-2xl">
          Whether it&apos;s a high-scale backend, an AI product, or a
          mission-critical architecture — let&apos;s make it happen.
        </p>

        {/* CTA Buttons */}
        <div className="cta-reveal flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 text-white font-display font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent-primary/30"
          >
            Start a Conversation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/suryathakur15"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white font-display font-bold text-lg transition-all duration-300 hover:border-white/20"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
