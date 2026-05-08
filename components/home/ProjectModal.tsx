import React, { useEffect, useRef } from "react";
import { IProject } from "../../constants";
import { gsap } from "gsap";
import Image from "next/image";

interface ProjectModalProps {
  project: IProject | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      gsap.to(modalRef.current, { opacity: 1, visibility: "visible", duration: 0.4, ease: "power3.out" });
      gsap.fromTo(
        contentRef.current,
        { scale: 0.92, y: 24, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(modalRef.current, { opacity: 0, visibility: "hidden", duration: 0.3, ease: "power3.in" });
      document.body.style.overflow = "unset";
    }
  }, [project]);

  if (!project) return null;

  const [c1, c2] = project.gradient;

  // Per-project tint colours derived from gradient
  const tintBg  = `${c1}12`;   // ~7% opacity fill
  const tintBorder = `${c1}30`; // ~19% opacity border
  const tintText   = c1;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[600] flex items-end sm:items-center justify-center px-0 sm:px-4 py-0 sm:py-8 invisible opacity-0"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-2xl cursor-pointer"
        style={{ background: `linear-gradient(135deg, ${c1}18 0%, #05050598 60%)` }}
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        ref={contentRef}
        className="relative w-full sm:max-w-5xl bg-[#0c0c0e] border overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] sm:max-h-[90vh] sm:rounded-[36px] rounded-t-[28px]"
        style={{ borderColor: tintBorder }}
      >
        {/* Themed ambient glow – top-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 80% -10%, ${c1}22 0%, transparent 55%)` }}
        />

        {/* ── Left: Project Image ── */}
        <div className="w-full md:w-[42%] h-48 sm:h-56 md:h-auto relative overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 hover:scale-105"
          />
          {/* Gradient fade into content on mobile */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: `linear-gradient(to top, #0c0c0e 0%, transparent 60%)` }}
          />
          {/* Vertical fade on desktop */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: `linear-gradient(to right, transparent 60%, #0c0c0e 100%)` }}
          />
        </div>

        {/* ── Right: Content ── */}
        <div className="w-full md:w-[58%] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-12 overflow-y-auto relative z-10 flex flex-col">

          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all group/close z-20"
            style={{ background: tintBg, border: `1px solid ${tintBorder}` }}
            onClick={onClose}
            aria-label="Close"
          >
            <div className="relative w-4 h-4">
              <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/70 rotate-45 group-hover/close:bg-white transition-colors" />
              <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/70 -rotate-45 group-hover/close:bg-white transition-colors" />
            </div>
          </button>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-[3px] w-8 rounded-full"
              style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }}
            />
            <span
              className="text-[10px] font-black uppercase tracking-[0.25em]"
              style={{ color: tintText }}
            >
              Case Study
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-white tracking-tighter leading-[1.05] mb-5">
            {project.name}
          </h2>

          {/* Tech chips – project-tinted */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-tight"
                style={{ background: tintBg, border: `1px solid ${tintBorder}`, color: tintText }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description – project-tinted background panel */}
          <div
            className="rounded-2xl p-5 sm:p-6 mb-6 relative overflow-hidden"
            style={{ background: tintBg, border: `1px solid ${tintBorder}` }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: c1 }}
            />
            <p className="relative text-sm sm:text-base md:text-lg leading-relaxed font-light text-white/80">
              {project.longDescription}
            </p>
          </div>

          {/* Footer bar */}
          <div
            className="mt-auto flex items-center justify-between pt-5 border-t"
            style={{ borderColor: tintBorder }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
              {project.name} · Proprietary
            </span>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: c1, boxShadow: `0 0 8px ${c1}` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
