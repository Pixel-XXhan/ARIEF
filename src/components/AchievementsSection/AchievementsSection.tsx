import { motion } from "framer-motion";
import { useState } from "react";

const achievements = [
    {
        title: "October Digital Creativity 2025",
        level: "Jawa Barat",
        result: "Juara 3",
        description: "Kompetisi inovasi digital tingkat Jawa Barat dengan 170+ SMK peserta.",
        project: "EduNoMics - Educational Economic System",
        team: ["Arief Fajar", "Raisa Camila Asila Fedya Putri"],
        images: [
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/ODC/%F0%9F%8E%89%20Selamat%20kepada%20para%20pemenang%20ODC%202025!%20%F0%9F%8E%89Kerja%20keras%2C%20kreativitas%2C%20dan%20semangat%20kalian%20telah.webp",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/ODC/DSC04518%20-%20Copy.JPG",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/ODC/DSC04544.JPG",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/ODC/DSC04496%20(3).JPG",
        ],
        certificate: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Sertifikat/DOC-20251210-WA0026.-1.png",
        color: "amber",
    },
    {
        title: "AI Koneksi 2025",
        level: "Nasional",
        result: "Juara Harapan 1",
        description: "Kompetisi AI tingkat nasional dengan 200+ sekolah di Indonesia.",
        project: "SEP - Sistem Evaluasi Pengajar",
        team: ["Arief Fajar", "Panca Walendra"],
        images: [
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/IMG_20251225_190818.jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/IMG_20251225_195404.jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/IMG_20251225_195516.jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/AI%20Koneksi/Selamat%20kepada%20para%20juara%20KONEKSI%20AI%20Competition%202025!%20%F0%9F%8E%89Kreativitas%2C%20inovasi%2C%20dan%20semangat%20kali.jpg",
        ],
        certificate: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Sertifikat/f95003bc-c284-4cf8-b3f1-7bb79a4ff4fe.jpg",
        color: "emerald",
    },
    {
        title: "Senavok UPI 2025",
        level: "Nasional",
        result: "Presenter",
        description: "Seminar Nasional Vokasi di Universitas Pendidikan Indonesia.",
        project: "EduNoMics",
        team: ["Tim SMK Marhas Margahayu"],
        images: [
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Senavok/IMG-20251112-WA0009(1).jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Senavok/Screenshot_2025-12-26-17-36-02-053_com.google.android.apps.docs.jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Senavok/Screenshot_2025-12-26-17-36-32-379_com.instagram.android.jpg",
            "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/Lomba/Senavok/Screenshot_2025-12-26-17-36-59-041_com.instagram.android.jpg",
        ],
        certificate: null,
        color: "sky",
    },
];

export const AchievementsSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showCertificate, setShowCertificate] = useState<string | null>(null);

    const getColorClasses = (color: string) => {
        switch (color) {
            case "amber":
                return "bg-amber-500/10 border-amber-500/30 text-amber-400";
            case "emerald":
                return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
            case "sky":
                return "bg-sky-500/10 border-sky-500/30 text-sky-400";
            default:
                return "bg-neutral-500/10 border-neutral-500/30 text-neutral-400";
        }
    };

    return (
        <motion.section
            id="achievements"
            className="py-16 md:py-20 px-4 md:px-6 space-y-10 md:space-y-12"
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
                Achievements
            </motion.h2>

            {/* Achievement Cards */}
            <div className="space-y-12 md:space-y-16">
                {achievements.map((achievement, idx) => (
                    <motion.div
                        key={achievement.title}
                        className="space-y-5 md:space-y-6 p-4 md:p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Title & Info - Mobile stacked, Desktop side by side */}
                        <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-start">
                            <div className="space-y-2">
                                <h3 className="text-lg md:text-xl font-semibold">{achievement.title}</h3>
                                <p className="text-sm text-neutral-400">{achievement.description}</p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    <span className={`text-xs px-3 py-1 rounded-full border ${getColorClasses(achievement.color)}`}>
                                        {achievement.result}
                                    </span>
                                    <span className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-400">
                                        {achievement.level}
                                    </span>
                                </div>
                            </div>
                            <div className="md:text-right space-y-1">
                                <p className="text-xs text-neutral-500">Project</p>
                                <p className="text-sm font-medium text-neutral-300">{achievement.project}</p>
                                <p className="text-xs text-neutral-500 pt-1">
                                    {achievement.team.join(", ")}
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                            {achievement.images.map((img, imgIdx) => (
                                <motion.div
                                    key={imgIdx}
                                    className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`${achievement.title} ${imgIdx + 1}`}
                                        className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Certificate Button */}
                        {achievement.certificate && (
                            <button
                                onClick={() => setShowCertificate(achievement.certificate)}
                                className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
                            >
                                Lihat Sertifikat
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Lightbox for Images */}
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
                        loading="lazy"
                    />
                </motion.div>
            )}

            {/* Certificate Modal */}
            {showCertificate && (
                <motion.div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowCertificate(null)}
                >
                    <img
                        src={showCertificate}
                        alt="Certificate"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        loading="lazy"
                    />
                </motion.div>
            )}
        </motion.section>
    );
};
