import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
    {
        name: "Tiara Aprilia",
        role: "Wakil Ketua 1",
        image: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20260102-WA0063.jpg",
        order: 1,
    },
    {
        name: "Arief Fajar",
        role: "Ketua OSIS",
        image: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG_20251225_183609_602.webp",
        order: 0,
        isLeader: true,
    },
    {
        name: "Wakil Ketua 2",
        role: "Wakil Ketua 2",
        image: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20260102-WA0051.jpg",
        order: 2,
    },
];

const galleryImages = [
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0137.jpg",
        caption: "Latihan Dasar Kepemimpinan",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0129.jpg",
        caption: "Kebersamaan Tim",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0131.jpg",
        caption: "Kegiatan OSIS",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0143.jpg",
        caption: "Tugas Bersama",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0144.jpg",
        caption: "Aktivitas OSIS",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0145.jpg",
        caption: "Koordinasi Tim",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0151.jpg",
        caption: "Rapat OSIS",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0173.jpg",
        caption: "Kegiatan Belajar",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0177.jpg",
        caption: "Momen Bersama",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0152.jpg",
        caption: "Aktivitas Rutin",
    },
];

const farewellImage = "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/OSIS/IMG-20251227-WA0181.jpg";

export const OSISSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Sort team members: Leader in center
    const sortedTeam = [...teamMembers].sort((a, b) => a.order - b.order);

    return (
        <motion.section
            id="osis"
            className="py-20 px-6 space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Header */}
            <div className="text-center space-y-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    OSIS SMPN 3 Margahayu
                </motion.h2>
                <motion.p
                    className="text-amber-400 text-sm font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Periode 2023-2024
                </motion.p>
                <motion.p
                    className="text-neutral-500 dark:text-neutral-500 text-xs max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Masa dimana kepemimpinan, tanggung jawab, dan kerja sama tim diasah.
                    Setiap tantangan menjadi pembelajaran, setiap kebersamaan menjadi kenangan.
                </motion.p>
            </div>

            {/* Team Hierarchy - Ketua in Center */}
            <div className="flex flex-col items-center gap-8">
                {/* Leader - Center Top */}
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        {/* Glow effect for leader */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-xl scale-110" />
                        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-amber-500/50">
                            <img
                                src={teamMembers.find(m => m.isLeader)?.image}
                                alt="Ketua OSIS"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Arief Fajar</h4>
                        <p className="text-sm text-amber-400 font-medium">Ketua OSIS</p>
                    </div>
                </motion.div>

                {/* Connection Line */}
                <div className="w-px h-8 bg-gradient-to-b from-amber-500/50 to-neutral-700" />

                {/* Vice Leaders - Below */}
                <div className="flex flex-wrap justify-center gap-12">
                    {sortedTeam.filter(m => !m.isLeader).map((member, idx) => (
                        <motion.div
                            key={member.name}
                            className="text-center space-y-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-neutral-700 hover:ring-amber-500/50 transition-all">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h4 className="font-medium text-sm">{member.name}</h4>
                                <p className="text-xs text-neutral-400 dark:text-neutral-400">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4 pt-8">
                <h3 className="text-lg font-semibold text-center text-neutral-300 dark:text-neutral-300">Dokumentasi Kegiatan</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Farewell Section */}
            <motion.div
                className="relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                    src={farewellImage}
                    alt="Perpisahan OSIS"
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Perpisahan</h3>
                    <p className="text-sm text-neutral-300 mt-2 max-w-lg">
                        Sebuah akhir yang indah dari perjalanan bersama.
                        Terima kasih untuk semua yang telah kita lalui.
                    </p>
                </div>
            </motion.div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
