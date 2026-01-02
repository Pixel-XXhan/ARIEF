import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
    {
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/Pixel-XXhan",
        label: "GitHub",
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: <Instagram className="w-5 h-5" />,
        href: "#",
        label: "Instagram",
    },
    {
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:arief@example.com",
        label: "Email",
    },
];

const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.footer
            className="relative pt-16 pb-8 px-4 md:px-8 border-t border-neutral-800 dark:border-neutral-800 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Arief Fajar</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed max-w-xs">
                            Siswa PPLG SMK Marhas Margahayu. Passionate about AI, building
                            innovative solutions, and leading teams to success.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg bg-neutral-800/50 dark:bg-neutral-800/50 text-neutral-400 hover:text-amber-400 hover:bg-neutral-700/50 transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-400">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-amber-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / CTA */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-400">
                            Get In Touch
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-500">
                            Tertarik untuk berkolaborasi atau punya pertanyaan?
                            Jangan ragu untuk menghubungi saya.
                        </p>
                        <motion.a
                            href="mailto:arief@example.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-sm font-medium hover:bg-amber-500/20 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Mail className="w-4 h-4" />
                            Hubungi Saya
                        </motion.a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-600 dark:text-neutral-600 flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Arief Fajar
                    </p>

                    <p className="text-xs text-neutral-600 dark:text-neutral-600">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs text-neutral-500 hover:text-amber-400 transition-colors"
                        whileHover={{ y: -2 }}
                    >
                        <ArrowUp className="w-4 h-4" />
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
};
