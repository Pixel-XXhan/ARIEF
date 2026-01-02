import { useEffect, useRef, useCallback, useState } from "react";

interface SectionAudioConfig {
    sectionId: string;
    audioSrc: string;
    fadeInDuration?: number;
    maxVolume?: number;
}

export const useSectionAudio = (configs: SectionAudioConfig[]) => {
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [userInteracted, setUserInteracted] = useState(false);

    // Listen for user interaction
    useEffect(() => {
        const handleInteraction = () => {
            setUserInteracted(true);
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("scroll", handleInteraction);
        };

        document.addEventListener("click", handleInteraction);
        document.addEventListener("scroll", handleInteraction);

        return () => {
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("scroll", handleInteraction);
        };
    }, []);

    // Initialize audio elements
    useEffect(() => {
        configs.forEach((config) => {
            if (!audioRefs.current[config.sectionId]) {
                const audio = new Audio(config.audioSrc);
                audio.loop = true;
                audio.volume = 0;
                audio.preload = "auto";
                audioRefs.current[config.sectionId] = audio;
            }
        });

        return () => {
            Object.values(audioRefs.current).forEach((audio) => {
                audio?.pause();
            });
        };
    }, [configs]);

    // Intersection Observer for section visibility
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        configs.forEach((config) => {
            const element = document.getElementById(config.sectionId);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                            setActiveSection(config.sectionId);
                        }
                    });
                },
                { threshold: [0.3, 0.5] }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, [configs]);

    // Handle audio transitions
    useEffect(() => {
        if (!userInteracted || !activeSection) return;

        const config = configs.find((c) => c.sectionId === activeSection);
        if (!config) return;

        // Fade out all other audios
        Object.entries(audioRefs.current).forEach(([id, audio]) => {
            if (id !== activeSection && audio) {
                fadeOutAudio(audio);
            }
        });

        // Fade in active audio
        const activeAudio = audioRefs.current[activeSection];
        if (activeAudio) {
            fadeInAudio(activeAudio, config.fadeInDuration || 3000, config.maxVolume || 0.3);
        }
    }, [activeSection, userInteracted, configs]);

    const fadeInAudio = useCallback(
        (audio: HTMLAudioElement, duration: number, maxVol: number) => {
            audio.play().catch(() => { });

            const steps = 30;
            const stepDuration = duration / steps;
            const volumeStep = maxVol / steps;
            let currentStep = 0;

            const interval = setInterval(() => {
                currentStep++;
                audio.volume = Math.min(volumeStep * currentStep, maxVol);

                if (currentStep >= steps) {
                    clearInterval(interval);
                }
            }, stepDuration);
        },
        []
    );

    const fadeOutAudio = useCallback((audio: HTMLAudioElement) => {
        const currentVol = audio.volume;
        const steps = 15;
        const stepDuration = 50;
        const volumeStep = currentVol / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            audio.volume = Math.max(currentVol - volumeStep * currentStep, 0);

            if (currentStep >= steps) {
                clearInterval(interval);
                audio.pause();
                audio.currentTime = 0;
            }
        }, stepDuration);
    }, []);

    const pauseAll = useCallback(() => {
        Object.values(audioRefs.current).forEach((audio) => {
            if (audio) fadeOutAudio(audio);
        });
    }, [fadeOutAudio]);

    return {
        activeSection,
        pauseAll,
        userInteracted,
    };
};
