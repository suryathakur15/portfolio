import { MutableRefObject, useEffect, useRef } from "react";
import {
  CheckpointNode,
  BranchNode,
  ItemSize,
  MENULINKS,
  NodeTypes,
  TIMELINE,
  TimelineNodeV2,
  Branch,
} from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop } from "pages";

// ─────────────────────────────────────────────
// Per-card colour palette — subtle, professional
// ─────────────────────────────────────────────
const CARD_ACCENTS = [
  {
    // IIT Delhi — amber/gold (leadership / mentorship)
    dot: "#F59E0B",
    fill: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.25)",
    glow: "rgba(245,158,11,0.15)",
    text: "#FCD34D",
    label: "rgba(245,158,11,0.7)",
  },
  {
    // GoDaddy — emerald (enterprise / fintech)
    dot: "#10B981",
    fill: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.25)",
    glow: "rgba(16,185,129,0.15)",
    text: "#6EE7B7",
    label: "rgba(16,185,129,0.7)",
  },
  {
    // Probo — electric blue (high-frequency / sports)
    dot: "#3B82F6",
    fill: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.25)",
    glow: "rgba(59,130,246,0.15)",
    text: "#93C5FD",
    label: "rgba(59,130,246,0.7)",
  },
  {
    // Merkle II — violet (data / analytics)
    dot: "#8B5CF6",
    fill: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.25)",
    glow: "rgba(139,92,246,0.15)",
    text: "#C4B5FD",
    label: "rgba(139,92,246,0.7)",
  },
  {
    // Merkle I — rose (first role / origin)
    dot: "#F43F5E",
    fill: "rgba(244,63,94,0.06)",
    border: "rgba(244,63,94,0.25)",
    glow: "rgba(244,63,94,0.15)",
    text: "#FDA4AF",
    label: "rgba(244,63,94,0.7)",
  },
];

const TimelineSection = ({ isDesktop }: IDesktop) => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(targetSection.current.querySelectorAll(".seq"), {
      scrollTrigger: { trigger: targetSection.current, start: "top 80%" },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  const checkpoints = TIMELINE.filter(
    (item): item is CheckpointNode => item.type === NodeTypes.CHECKPOINT,
  );

  return (
    <section
      className="w-full relative select-none section-container py-24 md:py-32 overflow-hidden"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section header ── */}
      <div className="flex flex-col items-center text-center mb-20 md:mb-28 relative z-10">
        <p className="text-accent-primary font-accent text-3xl mb-4 seq">
          Milestones
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 seq leading-tight">
          Engineering <span className="text-gradient">Evolution</span>
        </h2>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-accent-primary to-transparent mb-6 seq" />
        <p className="text-lg text-white/50 font-light max-w-xl seq">
          A journey through architectural challenges, leadership, and system
          scaling.
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="relative z-10">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/40 via-accent-secondary/40 to-transparent" />
          <div className="absolute inset-0 bg-accent-primary blur-[4px] opacity-15" />
        </div>

        <div className="flex flex-col">
          {checkpoints.map((item, idx) => {
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="relative group seq">
                {/* ── Mobile layout ── */}
                <div className="flex md:hidden items-start pb-12">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-10 flex justify-center pt-2">
                    <div
                      className="w-4 h-4 rounded-full border-2 z-20 transition-all duration-400 relative"
                      style={{
                        background: "#0c0c0e",
                        borderColor: accent.dot,
                        boxShadow: `0 0 12px ${accent.glow}`,
                      }}
                    >
                      <div
                        className="absolute inset-0.5 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: accent.dot }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 ml-4">
                    <div
                      className="rounded-2xl p-6 relative overflow-hidden transition-all duration-500"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {/* Hover tint layer */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ background: accent.fill }}
                      />
                      {/* Hover border overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"
                        style={{ border: `1px solid ${accent.border}` }}
                      />
                      {/* Shimmer line */}
                      <div
                        className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${accent.dot}, transparent)`,
                        }}
                      />

                      <div className="relative z-10">
                        <span
                          className="text-[10px] font-black uppercase tracking-[0.25em] mb-3 block transition-colors duration-300"
                          style={{ color: accent.label }}
                        >
                          {item.subtitle}
                        </span>
                        <h3 className="text-xl font-display font-bold text-white/80 leading-snug transition-colors duration-300 group-hover:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Desktop layout ── */}
                <div
                  className={`hidden md:flex items-center mb-20 ${isLeft ? "" : "flex-row-reverse"}`}
                >
                  {/* Card side */}
                  <div className={`w-[46%] ${isLeft ? "pr-14" : "pl-14"}`}>
                    <div
                      className="rounded-2xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {/* Hover fill */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ background: accent.fill }}
                      />
                      {/* Hover border */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none"
                        style={{ border: `1px solid ${accent.border}` }}
                      />
                      {/* Top shimmer */}
                      <div
                        className="absolute top-0 left-0 w-full h-[2px] -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] rounded-t-2xl"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${accent.dot}, transparent)`,
                        }}
                      />
                      {/* Corner glow */}
                      <div
                        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                        style={{ background: accent.glow }}
                      />

                      <div
                        className={`relative z-10 ${isLeft ? "text-right" : "text-left"}`}
                      >
                        <span
                          className="text-xs font-black uppercase tracking-[0.25em] mb-4 block transition-colors duration-300"
                          style={{ color: accent.label }}
                        >
                          {item.subtitle}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white/75 leading-tight transition-colors duration-300 group-hover:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="relative w-[8%] flex justify-center">
                    <div
                      className="w-5 h-5 rounded-full border-2 z-20 transition-all duration-500 group-hover:scale-125"
                      style={{
                        background: "#0c0c0e",
                        borderColor: accent.dot,
                        boxShadow: `0 0 16px ${accent.glow}`,
                      }}
                    >
                      <div
                        className="absolute inset-[4px] rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: accent.dot }}
                      />
                    </div>
                  </div>

                  {/* Year ghost */}
                  <div
                    className={`w-[46%] flex items-center ${isLeft ? "justify-start pl-6" : "justify-end pr-6"}`}
                  >
                    <span
                      className="font-display font-black text-[7rem] lg:text-[9rem] leading-none opacity-0 group-hover:opacity-[0.12] pointer-events-none select-none transition-all duration-700"
                      style={{ color: accent.dot }}
                    >
                      {item.subtitle?.split("|")[1]?.trim().split(" ")[1]}
                    </span>
                  </div>
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

// Keep type declarations for existing imports
type LinkedTimelineNode = LinkedCheckpointNode | LinkedBranchNode;
type LinkedCheckpointNode = LinkNode & CheckpointNode;
type LinkedBranchNode = LinkNode & BranchNode;
interface LinkNode {
  next?: LinkedTimelineNode;
  prev?: LinkedTimelineNode;
}
