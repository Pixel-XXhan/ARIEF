import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

interface AudioContextType {
    pauseAll: () => void;
    resumeActive: () => void;
    isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

interface AudioConfig {
    sectionId: string;
    audioSrc: string;
    fadeInDuration?: number;
    maxVolume?: number;
}

const audioConfigs: AudioConfig[] = [
    {
        sectionId: "home",
        audioSrc: "/audio/viva-la-vida.mp3",
        fadeInDuration: 10000,
        maxVolume: 0.25,
    },
    {
        sectionId: "osis",
        audioSrc: "/audio/perunggu-33x.mp3",
        fadeInDuration: 2000,
        maxVolume: 0.3,
    },
    {
        sectionId: "achievements",
        audioSrc: "/audio/we-are-the-champions.mp3",
        fadeInDuration: 2000,
        maxVolume: 0.3,
    },
    {
        sectionId: "projects",
        audioSrc: "/audio/golden-hour.mp3",
        fadeInDuration: 3000,
        maxVolume: 0.25,
    },
];

export const AudioProvider = ({ children }: { children: ReactNode }) => {
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
    const [activeSection, setActiveSection] = useState<string>("home");
    const [userInteracted, setUserInteracted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const fadeIntervalsRef = useRef<{ [key: string]: number }>({});

    // Listen for first user interaction
    useEffect(() => {
        const handleInteraction = () => {
            setUserInteracted(true);
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
        };

        window.addEventListener("click", handleInteraction);
        window.addEventListener("keydown", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);

        return () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
        };
    }, []);

    // Initialize audio elements
    useEffect(() => {
        audioConfigs.forEach((config) => {
            const audio = new Audio(config.audioSrc);
            audio.loop = true;
            audio.volume = 0;
            audio.preload = "auto";
            audioRefs.current[config.sectionId] = audio;
        });

        return () => {
            Object.values(audioRefs.current).forEach((audio) => {
                audio.pause();
            });
            Object.values(fadeIntervalsRef.current).forEach((interval) => {
                clearInterval(interval);
            });
        };
    }, []);

    // Set up intersection observers
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        audioConfigs.forEach((config) => {
            const element = document.getElementById(config.sectionId);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                            setActiveSection(config.sectionId);
                        }
                    });
                },
                { threshold: [0.3] }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    // Handle audio transitions based on active section
    useEffect(() => {
        if (!userInteracted) return;

        const config = audioConfigs.find((c) => c.sectionId === activeSection);
        if (!config) return;

        // Fade out all other audios
        Object.entries(audioRefs.current).forEach(([id, audio]) => {
            if (id !== activeSection) {
                fadeOut(audio, id);
            }
        });

        // Fade in active audio
        const activeAudio = audioRefs.current[activeSection];
        if (activeAudio) {
            fadeIn(activeAudio, activeSection, config.fadeInDuration || 3000, config.maxVolume || 0.3);
            setIsPlaying(true);
        }
    }, [activeSection, userInteracted]);

    const fadeIn = (audio: HTMLAudioElement, id: string, duration: number, maxVol: number) => {
        // Clear existing interval if any
        if (fadeIntervalsRef.current[id]) {
            clearInterval(fadeIntervalsRef.current[id]);
        }

        audio.play().catch(() => { });

        const steps = 50;
        const stepDuration = duration / steps;
        const volumeStep = maxVol / steps;
        let currentStep = 0;

        fadeIntervalsRef.current[id] = window.setInterval(() => {
            currentStep++;
            audio.volume = Math.min(volumeStep * currentStep, maxVol);

            if (currentStep >= steps) {
                clearInterval(fadeIntervalsRef.current[id]);
                delete fadeIntervalsRef.current[id];
            }
        }, stepDuration);
    };

    const fadeOut = (audio: HTMLAudioElement, id: string) => {
        if (audio.paused) return;

        if (fadeIntervalsRef.current[id]) {
            clearInterval(fadeIntervalsRef.current[id]);
        }

        const currentVol = audio.volume;
        if (currentVol === 0) {
            audio.pause();
            return;
        }

        const steps = 20;
        const stepDuration = 40;
        const volumeStep = currentVol / steps;
        let currentStep = 0;

        fadeIntervalsRef.current[id] = window.setInterval(() => {
            currentStep++;
            audio.volume = Math.max(currentVol - volumeStep * currentStep, 0);

            if (currentStep >= steps) {
                clearInterval(fadeIntervalsRef.current[id]);
                delete fadeIntervalsRef.current[id];
                audio.pause();
                audio.currentTime = 0;
            }
        }, stepDuration);
    };

    const pauseAll = () => {
        Object.entries(audioRefs.current).forEach(([id, audio]) => {
            fadeOut(audio, id);
        });
        setIsPlaying(false);
    };

    const resumeActive = () => {
        const config = audioConfigs.find((c) => c.sectionId === activeSection);
        if (!config) return;

        const audio = audioRefs.current[activeSection];
        if (audio) {
            fadeIn(audio, activeSection, 1000, config.maxVolume || 0.3);
            setIsPlaying(true);
        }
    };

    return (
        <AudioContext.Provider value={{ pauseAll, resumeActive, isPlaying }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within AudioProvider");
    }
    return context;
};
