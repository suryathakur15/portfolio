import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
  animationEnabled,
}: {
  project: IProject;
  animationEnabled: boolean;
}) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const {
    name,
    tech,
    image,
    description,
    gradient: [stop1, stop2],
  } = project;

  useEffect(() => {
    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        gyroscope: false,
      });
    }
  }, [projectCard]);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group block relative w-[350px] md:w-[450px] aspect-[4/5] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] snap-start"
    >
      <div
        ref={projectCard}
        className="h-full w-full relative flex flex-col justify-end p-8 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="opacity-60 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-semibold uppercase tracking-wider border border-white/10">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-display font-bold text-white mb-3 tracking-tight">
            {name}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
