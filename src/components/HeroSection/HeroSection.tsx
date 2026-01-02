import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full min-h-[85vh] gap-8 lg:gap-16"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-6 md:space-y-8 p-4 md:p-8 text-center md:text-left"
        initial={false}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Arief Fajar
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-400 font-light"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
          }}
        >
          AI Enthusiast · Full-Stack Developer · Leader
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-neutral-500 max-w-xl leading-relaxed mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          Siswa SMK Marhas Margahayu, passionate di AI mulai dari LLM,
          Computer Vision, hingga Agent Automation. Berpengalaman memimpin
          dan menjuarai kompetisi nasional.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 md:gap-3 pt-2 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
          }}
        >
          <Badge className="text-xs md:text-sm px-3 md:px-4 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30">
            AI & Machine Learning
          </Badge>
          <Badge className="text-xs md:text-sm px-3 md:px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Leadership
          </Badge>
          <Badge className="text-xs md:text-sm px-3 md:px-4 py-1.5 bg-sky-500/20 text-sky-400 border border-sky-500/30">
            Full-Stack Dev
          </Badge>
        </motion.div>
      </motion.div>

      {/* Right Section - GitHub Profile Image */}
      <motion.div
        className="flex-1 flex justify-center p-4 md:p-8"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 via-transparent to-emerald-500/20 blur-2xl scale-125" />

          {/* Image container - GitHub Avatar */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-2 ring-neutral-800">
            <img
              src="https://avatars.githubusercontent.com/u/205114094?v=4"
              alt="Arief Fajar - GitHub"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
