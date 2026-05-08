import { PROJECTS, IProject } from "../../constants";
import Image from "next/image";
import { useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";

interface ProjectsSectionProps extends IDesktop {
  setSelectedProject: Dispatch<SetStateAction<IProject | null>>;
}

const ProjectsSection = ({ isDesktop, setSelectedProject }: ProjectsSectionProps) => {
  const sectionRef: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    revealTl.from(sectionRef.current.querySelectorAll(".project-card"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="w-full relative select-none section-container py-24 md:py-32"
      id="works"
      ref={sectionRef}
    >
      <div className="flex flex-col mb-16">
        <p className="text-accent-primary font-display font-semibold tracking-widest uppercase mb-4">SELECTED WORKS</p>
        <h1 className="text-5xl md:text-6xl font-display font-black tracking-tighter leading-[1.04] mb-6">
          Architecting <span className="text-gradient">Impact</span>
        </h1>
        <h2 className="text-xl opacity-70 max-w-2xl">
          From high-frequency sports engines to AI-driven social platforms. 
          A curated selection of systems I've built and scaled.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {PROJECTS.map((project, index) => (
          <div
            key={project.name}
            className="project-card group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-obsidian-light">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="px-6 py-3 rounded-full bg-white text-obsidian font-display font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    View Project Details
                 </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-display font-bold group-hover:text-accent-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md border border-white/10 text-[9px] font-bold text-white/30 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg opacity-50 font-medium leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
