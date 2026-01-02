import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import StripedBackground from "./components/lightswind/StripedBackground";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { OSISSection } from "./components/OSISSection/OSISSection";
import { FormagaSection } from "./components/FormagaSection/FormagaSection";
import { AchievementsSection } from "./components/AchievementsSection/AchievementsSection";
import { Footer } from "./components/Footer/Footer";
import { AudioProvider } from "./components/AudioProvider";
import ReactLenis from "lenis/react";
import Dock from "./components/lightswind/dock";
import {
  Home,
  User,
  GraduationCap,
  Users,
  Trophy,
  FolderKanban,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dockItems = [
    {
      icon: <Home size={24} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <User size={24} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Education",
      onClick: () => scrollToSection("education"),
    },
    {
      icon: <Users size={24} />,
      label: "Leadership",
      onClick: () => scrollToSection("osis"),
    },
    {
      icon: <Trophy size={24} />,
      label: "Achievements",
      onClick: () => scrollToSection("achievements"),
    },
    {
      icon: <FolderKanban size={24} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
  ];

  return (
    <AudioProvider>
      <div className="app-container min-h-screen transition-colors duration-300">
        <StripedBackground className={"fixed z-0 blur-xs opacity-30 dark:opacity-30"} />

        <ReactLenis root>
          <Header />

          {/* Main Content */}
          <div
            className="w-full bg-transparent max-w-7xl px-4 lg:px-8 mx-auto py-24
            flex items-center justify-center"
          >
            <div className="z-10 w-full">
              <div id="home">
                <HeroSection />
              </div>
              <div id="about">
                <AboutSection />
              </div>
              <div id="education">
                <EducationSection />
              </div>
              <div id="osis">
                <OSISSection />
              </div>
              <div id="formaga">
                <FormagaSection />
              </div>
              <div id="achievements">
                <AchievementsSection />
              </div>
              <div id="projects">
                <ProjectsSection />
              </div>

              {/* Enhanced Footer */}
              <Footer />
            </div>
          </div>

          {/* Dock */}
          <AnimatePresence>
            {showDock && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]"
              >
                <Dock
                  items={dockItems}
                  position="bottom"
                  magnification={70}
                  baseItemSize={50}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </ReactLenis>
      </div>
    </AudioProvider>
  );
}

export default App;
