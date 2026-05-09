import Image from "next/image";
import { EMAIL, SOCIAL_LINKS } from "../../constants";

const Footer = () => {
  const socialKeys = Object.keys(SOCIAL_LINKS) as Array<keyof typeof SOCIAL_LINKS>;

  return (
    <footer className="w-full relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/[0.04] to-accent-secondary/[0.06] pointer-events-none" />

      <div className="section-container py-20 md:py-28 relative z-10">
        {/* Main CTA Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-14 mb-16 md:mb-20">

          {/* Left — headline + email */}
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tighter leading-[1.08] mb-4">
              Let&apos;s build something{" "}
              <span className="text-gradient font-accent text-4xl sm:text-5xl md:text-6xl lowercase">
                Legendary.
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/50 font-light mb-8 leading-relaxed">
              Open for collaborations, architecture consulting,&nbsp;
              and lead engineering roles.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 font-display font-bold text-white/90 hover:text-accent-primary transition-colors duration-300 text-lg sm:text-xl md:text-2xl"
            >
              <span className="underline underline-offset-4 decoration-white/20 group-hover:decoration-accent-primary/40 break-all">
                {EMAIL}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — social icons */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {socialKeys.map((el) => (
              <a
                href={SOCIAL_LINKS[el]}
                key={el}
                aria-label={el}
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:scale-110 hover:border-accent-primary/60 hover:bg-accent-primary/10 transition-all duration-300 group"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={`/social/${el}.svg`}
                  alt={el}
                  width={20}
                  height={20}
                  className="invert brightness-[2] opacity-70 group-hover:opacity-100 transition-all"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white/25">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span>© {new Date().getFullYear()} Surya Thakur · Lead Software Engineer</span>
            <span className="font-accent text-lg text-accent-tertiary brightness-125 lowercase opacity-90 mt-1 tracking-wide">Handcrafted by Surya</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
