import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import SkillsSection from "@/components/home/skills";
import CollaborationSection from "@/components/home/collaboration";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import Scripts from "@/components/common/scripts";
import AboutSection from "@/components/home/about";
import Menu from "@/components/common/menu";
import ProjectModal from "@/components/home/ProjectModal";
import { IProject } from "../constants";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  let timer: NodeJS.Timeout = null;

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  const [menuVisible, setmenuVisible] = useState(false);

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <Header menuVisible={menuVisible} setmenuVisible={setmenuVisible} />
        <Menu setmenuVisible={setmenuVisible} visible={menuVisible} />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        <ProgressIndicator />
        <main className="flex-col flex min-h-screen">
          <HeroSection />
          <AboutSection />
          <ProjectsSection isDesktop={isDesktop} setSelectedProject={setSelectedProject} />
          <SkillsSection />
          <TimelineSection isDesktop={isDesktop} />
          <CollaborationSection />
          <Footer />
        </main>
        <Scripts />
      </Layout>
    </>
  );
}
