import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLenis } from "lenis/react";
import { BorderBeam } from "../lightswind/border-beam";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "OSIS", href: "#osis" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1200px at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(20px at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const listVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, top: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        >
          <div
            className={`header-container border backdrop-blur-xl
            w-full xl:max-w-5xl rounded-full
            flex items-center justify-between px-6 py-3
            transition-all duration-300
            ${theme === 'dark'
                ? 'border-neutral-800 bg-neutral-900/80'
                : 'border-neutral-200 bg-white/90'
              }`}
          >
            <BorderBeam />

            {/* Logo */}
            <a
              onClick={() => handleScrollTo("#hero")}
              className={`cursor-pointer font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}
            >
              AF
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className="relative group text-sm font-medium transition-colors"
                  >
                    <a
                      onClick={() => handleScrollTo(item.href)}
                      className={`cursor-pointer transition-colors ${theme === 'dark'
                          ? 'text-neutral-400 hover:text-white'
                          : 'text-neutral-600 hover:text-neutral-900'
                        }`}
                    >
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full text-sm font-semibold transition-colors hidden md:block ${theme === 'dark'
                  ? 'hover:bg-neutral-800'
                  : 'hover:bg-neutral-100'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-neutral-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-amber-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'
                  }`}
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`absolute top-8 right-8 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={32} />
                </motion.button>

                <motion.ul
                  {...({
                    variants: listVariants,
                  } as MotionProps)}
                  className="flex flex-col items-center justify-center h-full space-y-8"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      {...({ variants: itemVariants } as MotionProps)}
                    >
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className={`text-3xl font-bold cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-neutral-900'
                          }`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile theme toggle */}
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="absolute bottom-12 p-3 rounded-full bg-neutral-800/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {theme === "dark" ? (
                    <Moon size={24} className="text-white" />
                  ) : (
                    <Sun size={24} className="text-amber-500" />
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
