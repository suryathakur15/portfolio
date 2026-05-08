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
      gsap.to(modalRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        ease: "power3.in",
      });
      document.body.style.overflow = "unset";
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-12 invisible opacity-0"
    >
      <div 
        className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl cursor-pointer"
        onClick={onClose}
      ></div>
      
      <div 
        ref={contentRef}
        className="relative w-full max-w-5xl bg-obsidian-light border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] group/modal"
        style={{ borderImageSource: `linear-gradient(to bottom right, ${project.gradient[0]}33, ${project.gradient[1]}33)`, borderImageSlice: 1 }}
      >
        {/* Subtle Themed Glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 transition-opacity group-hover/modal:opacity-30"
          style={{ background: `radial-gradient(circle at top right, ${project.gradient[0]}22, transparent 60%)` }}
        ></div>

        {/* Project Image */}
        <div className="w-full md:w-[45%] h-72 md:h-auto relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-1000 group-hover/modal:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Project Details */}
        <div className="w-full md:w-[55%] p-10 md:p-16 overflow-y-auto relative z-10 flex flex-col">
          <button 
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group/close"
            onClick={onClose}
          >
            <div className="relative w-6 h-6">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45 transition-transform group-hover/close:rotate-[135deg]"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45 transition-transform group-hover/close:rotate-[-135deg]"></div>
            </div>
          </button>

          <div className="flex items-center gap-4 mb-6">
             <div 
              className="w-12 h-1.5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
             ></div>
             <span className="text-white/40 font-display font-bold text-xs tracking-[0.3em] uppercase">
               Architecture Deep Dive
             </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
            {project.name}
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] text-[11px] font-black text-white/60 uppercase tracking-tight">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-8 text-xl md:text-2xl opacity-80 leading-relaxed font-light text-white/90">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-accent-primary">
              {project.longDescription}
            </p>
          </div>

          <div className="mt-auto pt-16 flex items-center justify-between opacity-30 group-hover/modal:opacity-50 transition-opacity">
             <div className="text-[10px] font-black uppercase tracking-[0.4em]">Proprietary Technology • {project.name}</div>
             <div className="w-16 h-px bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
