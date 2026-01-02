import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="w-5 h-5" />,
    category: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    category: "Backend",
    items: ["NestJS", "Express", "FastAPI", "PostgreSQL"],
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    category: "Mobile",
    items: ["Flutter", "React Native"],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    category: "AI / ML",
    items: ["LLM", "RAG", "Vector Search", "Computer Vision", "Agent Automation"],
  },
];

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16 md:py-20 space-y-10 md:space-y-12"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">About</h2>
        <p className="text-neutral-400 dark:text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed px-2">
          Siswa jurusan PPLG di SMK Marhas Margahayu dengan passion di
          Artificial Intelligence dan software development. Pengalaman
          kepemimpinan dan prestasi kompetisi nasional membentuk karakter saya.
        </p>
      </div>

      {/* Skills Grid - Elegant Neutral Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {skillCategories.map((skill, idx) => (
          <motion.div
            key={skill.category}
            className="p-5 md:p-6 rounded-2xl bg-neutral-900/50 dark:bg-neutral-900/50 border border-neutral-800 dark:border-neutral-800 hover:border-amber-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-base md:text-lg">{skill.category}</h3>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full bg-neutral-800/80 dark:bg-neutral-800/80 text-neutral-300 dark:text-neutral-300 border border-neutral-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Separator className="bg-neutral-800 dark:bg-neutral-800" />
    </motion.div>
  );
};
