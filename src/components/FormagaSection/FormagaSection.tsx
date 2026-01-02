import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/IMG-20251227-WA0130.jpg",
        caption: "Kegiatan Forum Anak",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/IMG-20251227-WA0152.jpg",
        caption: "Rapat Koordinasi",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/IMG-20251227-WA0155.jpg",
        caption: "Dokumentasi Kegiatan",
    },
    {
        src: "https://storage.cloud.google.com/theportfolio/drive-download-20260102T182306Z-1-001/%20buset/IMG-20251227-WA0171.jpg",
        caption: "Pertemuan Klaster",
    },
];

export const FormagaSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <motion.section
            id="formaga"
            className="py-16 md:py-20 px-4 md:px-6 space-y-8 md:space-y-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Header */}
            <div className="space-y-3 text-center md:text-left">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Forum Anak Margahayu
                </motion.h2>
                <motion.p
                    className="text-amber-400 text-sm md:text-base font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Ketua Klaster 5
                </motion.p>
            </div>

            {/* Description Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <motion.div
                    className="p-5 md:p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-base md:text-lg font-semibold text-neutral-200">Apa itu Forum Anak?</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                        Forum Anak adalah wadah partisipasi anak dalam proses pembangunan
                        di tingkat desa, kecamatan, hingga nasional. Forum ini menjadi
                        tempat anak-anak menyuarakan aspirasi dan mengembangkan
                        potensi kepemimpinan.
                    </p>
                </motion.div>

                <motion.div
                    className="p-5 md:p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-base md:text-lg font-semibold text-neutral-200">Sistem Klaster</h3>
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                        Klaster adalah pembagian fokus kerja Forum Anak berdasarkan
                        isu-isu penting. Sebagai Ketua Klaster 5, saya memimpin
                        tim dalam mengadvokasi dan menjalankan program-program
                        pengembangan anak di Kecamatan Margahayu.
                    </p>
                </motion.div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {galleryImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <img
                            src={img.src}
                            alt={img.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

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
