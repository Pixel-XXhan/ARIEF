import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import { motion } from "framer-motion";

const educationData = [
  {
    school: "SMK Marhas Margahayu",
    period: "2024 - Sekarang",
    type: "Sekolah Menengah Kejuruan",
    major: "PPLG (Pengembangan Perangkat Lunak dan Gim)",
    logo: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/1736149948-icon%20(1).png",
    highlights: [
      "Juara 3 October Digital Creativity 2025",
      "Juara Harapan 1 AI Koneksi 2025",
      "Presenter di Senavok UPI 2025",
    ],
    current: true,
  },
  {
    school: "SMPN 3 Margahayu",
    period: "2021 - 2024",
    type: "Sekolah Menengah Pertama",
    major: null,
    logo: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/gdF3_P3W_400x400-removebg-preview%20(1).png",
    highlights: [
      "Ketua OSIS periode 2023-2024",
      "Ketua Klaster 5 Forum Anak Margahayu",
    ],
    current: false,
  },
  {
    school: "SDN Taman Kopo Indah",
    period: "2015 - 2021",
    type: "Sekolah Dasar",
    major: null,
    logo: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/680bfec5adc23f3a0a2638155210ca21-removebg-preview.png",
    highlights: [],
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-8 py-16 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Education
      </motion.h3>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className={`bg-neutral-900/50 dark:bg-neutral-900/50 border-neutral-800 dark:border-neutral-800 hover:border-neutral-700 dark:hover:border-neutral-700 transition-colors ${edu.current ? 'ring-1 ring-amber-500/30' : ''}`}>
              <CardHeader className="flex flex-row items-start gap-5">
                {/* School Logo - Increased size and better container */}
                <div className="w-20 h-20 rounded-xl bg-neutral-800 dark:bg-neutral-800 p-3 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <CardTitle className="text-lg font-semibold">
                      {edu.school}
                    </CardTitle>
                    {edu.current && (
                      <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">
                        Sekarang
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 mt-1">
                    {edu.type}
                    {edu.major && <span className="text-amber-400"> · {edu.major}</span>}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{edu.period}</p>
                </div>
              </CardHeader>

              {edu.highlights.length > 0 && (
                <CardContent className="pt-0">
                  <ul className="space-y-1.5">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-xs text-neutral-500 dark:text-neutral-500 flex items-start gap-2">
                        <span className="text-amber-500 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
