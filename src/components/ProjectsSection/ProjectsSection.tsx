"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  videos?: string[];
  images?: string[];
  achievement?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EduNoMics",
    subtitle: "Educational Economic System",
    description:
      "Platform pembelajaran cerdas untuk pelajar Indonesia. Menggabungkan sistem ekonomi digital dengan pendidikan untuk menciptakan ekosistem belajar yang interaktif.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AI/ML", "FastAPI"],
    videos: [
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Video/with%20backsound%20music.mp4",
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Video/All%20in%20one%20website%20%F0%9F%91%BE%E2%AD%90%EF%B8%8FEdunomics%20-%20Partner%20belajar%20cerdas%20buatan%20pelajar%20Indonesia%20untuk%20pelajar.mp4",
    ],
    achievement: "Juara 3 ODC Jawa Barat",
  },
  {
    id: 2,
    title: "SEP",
    subtitle: "Sistem Evaluasi Pengajar",
    description:
      "Sistem AI yang dapat membaca ekspresi wajah siswa untuk mengevaluasi efektivitas pengajaran secara real-time. Menggunakan Computer Vision untuk analisis emosi.",
    tech: ["Python", "Computer Vision", "TensorFlow", "FastAPI", "React"],
    images: [
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/IMG_20251225_195404.jpg",
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/IMG_20251225_195516.jpg",
    ],
    achievement: "Juara Harapan 1 Nasional",
  },
  {
    id: 3,
    title: "OrenaX",
    subtitle: "AI-Powered Cultural Platform",
    description:
      "Startup AI pertama yang fokus pada pelestarian budaya Indonesia. Platform yang menggunakan AI untuk mengeksplorasi, mempelajari, dan melestarikan kebudayaan nusantara.",
    tech: ["Next.js", "LLM", "RAG", "Vector Search", "PostgreSQL"],
    images: [
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Video/Cuplikan%20layar%202026-01-03%20024252.png",
      "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Video/Cuplikan%20layar%202026-01-03%20024317.png",
    ],
    achievement: "Startup in Development",
  },
];

const senavokVideo = "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Video/Pameran%20Inovasi%20Teknologi%20Digital%20SENAVOK%202025%20Edunomics%20-%20Partner%20Belajar%20Cerdas%20Buatan%20Pelajar%20(2).mp4";

export const ProjectsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideo = (videoUrl: string) => {
    const video = videoRefs.current[videoUrl];
    if (video) {
      if (playingVideo === videoUrl) {
        video.pause();
        setPlayingVideo(null);
      } else {
        Object.values(videoRefs.current).forEach((v) => v?.pause());
        video.play();
        setPlayingVideo(videoUrl);
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-20 px-4 md:px-6 space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* All Projects - Equal Treatment */}
      <div className="space-y-12 md:space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="space-y-6 p-4 md:p-8 rounded-2xl bg-neutral-900/30 dark:bg-neutral-900/30 border border-neutral-800 dark:border-neutral-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  {project.achievement && (
                    <span className="text-xs px-3 py-1 bg-amber-500/15 text-amber-400 rounded-full border border-amber-500/30">
                      {project.achievement}
                    </span>
                  )}
                </div>
                <p className="text-amber-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-sm text-neutral-400 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 bg-neutral-800 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-300 rounded-lg border border-neutral-700/50"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Videos */}
            {project.videos && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.videos.map((video, vidIdx) => (
                  <div
                    key={vidIdx}
                    className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800 group"
                  >
                    <video
                      ref={(el) => { videoRefs.current[video] = el; }}
                      src={video}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      preload="metadata"
                      onEnded={() => setPlayingVideo(null)}
                    />
                    <button
                      onClick={() => toggleVideo(video)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors"
                    >
                      {playingVideo === video ? (
                        <Pause className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                      ) : (
                        <Play className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Images */}
            {project.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="aspect-video rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Senavok Video Section */}
      <motion.div
        className="space-y-4 p-4 md:p-6 rounded-2xl bg-neutral-900/20 dark:bg-neutral-900/20 border border-neutral-800/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-medium text-neutral-300 dark:text-neutral-300">
            Pameran Senavok UPI 2025
          </h4>
          <span className="text-xs px-2 py-0.5 bg-neutral-800 text-neutral-400 rounded">
            Seminar Nasional Vokasi
          </span>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800 max-w-3xl group">
          <video
            ref={(el) => { videoRefs.current[senavokVideo] = el; }}
            src={senavokVideo}
            className="w-full h-full object-cover"
            loop
            playsInline
            preload="metadata"
          />
          <button
            onClick={() => toggleVideo(senavokVideo)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors"
          >
            {playingVideo === senavokVideo ? (
              <Pause className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
            ) : (
              <Play className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </motion.section>
  );
};
