import { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const STATS = [
  { value: "7+", label: "Years of experience" },
  { value: "20M+", label: "Users scaled" },
  { value: "40+", label: "Technologies mastered" },
  { value: "5", label: "Products shipped" },
];

const TABS = [
  { key: "core", label: "Backend", skills: SKILLS.core },
  { key: "frontend", label: "Frontend", skills: SKILLS.frontend },
  { key: "cloud", label: "Cloud / DevOps", skills: SKILLS.cloud },
  {
    key: "other",
    label: "Tools",
    skills: [...SKILLS.userInterface, ...SKILLS.other],
  },
] as const;

const PRINCIPLES = [
  {
    icon: "🚀",
    title: "Innovation First",
    sub: "Always exploring new horizons",
    gradient: "from-amber-400/20 to-orange-500/5",
    border: "border-amber-400/20",
    glow: "group-hover:shadow-amber-400/10",
  },
  {
    icon: "🛠️",
    title: "Scalable Architecture",
    sub: "Built to handle the future",
    gradient: "from-indigo-400/20 to-blue-500/5",
    border: "border-indigo-400/20",
    glow: "group-hover:shadow-indigo-400/10",
  },
  {
    icon: "💎",
    title: "Aesthetic Design",
    sub: "Beauty meets functionality",
    gradient: "from-purple-400/20 to-pink-500/5",
    border: "border-purple-400/20",
    glow: "group-hover:shadow-purple-400/10",
  },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
const SkillChip = ({ skill }: { skill: string }) => (
  <div className="flex flex-col items-center gap-2 group/chip">
    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/8 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover/chip:border-accent-primary/40 group-hover/chip:bg-accent-primary/5 group-hover/chip:scale-110">
      {/* Letter fallback */}
      <span className="absolute inset-0 flex items-center justify-center font-display font-black text-sm text-white/10 pointer-events-none uppercase select-none">
        {skill.charAt(0)}
      </span>
      <Image
        src={`/skills/${skill.toLowerCase()}.svg`}
        alt={skill}
        width={30}
        height={30}
        className="relative z-10 grayscale opacity-60 object-contain transition-all duration-300 group-hover/chip:grayscale-0 group-hover/chip:opacity-100"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
    <span className="text-[9px] uppercase font-bold tracking-widest text-white/30 group-hover/chip:text-white/80 transition-colors text-center truncate w-full px-0.5">
      {skill}
    </span>
  </div>
);

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]["key"]>("core");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: targetSection.current, start: "top 80%" },
    });
    tl.from(targetSection.current.querySelectorAll(".seq"), {
      opacity: 0,
      y: 28,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, []);

  const currentSkills =
    TABS.find((t) => t.key === activeTab)?.skills ?? TABS[0].skills;

  return (
    <section
      id={MENULINKS[2].ref}
      ref={targetSection}
      className="section-container py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background orb */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 seq">
        <div>
          <p className="text-accent-primary font-accent text-2xl mb-3">
            Technical Stack
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Engineering{" "}
            <span className="text-gradient">Digital Excellence</span>
          </h2>
        </div>
        <p className="text-xl opacity-80 leading-relaxed max-w-sm md:text-right">
          A curated toolkit built over 7+ years of shipping systems at scale.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 seq">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="glass-card py-7 px-6 flex flex-col items-center text-center group hover:border-accent-primary/30 transition-all duration-300"
          >
            <span className="text-4xl md:text-5xl font-display font-black text-gradient mb-2">
              {s.value}
            </span>
            <span className="text-[11px] uppercase font-bold tracking-widest text-white/35 group-hover:text-white/60 transition-colors">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Principles Strip ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 seq">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className={`group relative glass-card p-7 flex items-center gap-5 border ${p.border} bg-gradient-to-br ${p.gradient} hover:scale-[1.02] hover:shadow-xl ${p.glow} transition-all duration-500 overflow-hidden`}
          >
            <div className="text-4xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              {p.icon}
            </div>
            <div className="min-w-0">
              <p className="font-display font-black text-white text-lg leading-tight mb-1 truncate">
                {p.title}
              </p>
              <p className="text-white/45 text-sm font-light">{p.sub}</p>
            </div>
            {/* Shimmer line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* ── Tab Switcher ── */}
      <div className="mb-10 seq">
        {/* Mobile: full-width vertical stack | Desktop: inline pill row */}
        <div className="flex flex-col sm:flex-row sm:inline-flex bg-white/[0.03] border border-white/[0.08] rounded-2xl p-1.5 gap-1 w-full sm:w-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-300 text-left sm:text-center ${
                activeTab === tab.key
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/30"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Skills Grid ── */}
      <div
        key={activeTab}
        className="glass-card p-6 md:p-10 seq"
        style={{ animation: "fadeSlideIn 0.35s ease" }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-x-3 gap-y-8">
          {currentSkills.map((skill) => (
            <SkillChip key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
