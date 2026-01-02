import { useEffect, useRef, useCallback } from "react";

interface UseAudioPlayerOptions {
    src: string;
    fadeInDuration?: number;
    maxVolume?: number;
    loop?: boolean;
}

export const useAudioPlayer = ({
    src,
    fadeInDuration = 3000,
    maxVolume = 0.5,
    loop = true,
}: UseAudioPlayerOptions) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const fadeIntervalRef = useRef<number | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        audioRef.current.loop = loop;
        audioRef.current.volume = 0;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
            }
        };
    }, [src, loop]);

    const fadeIn = useCallback(() => {
        if (!audioRef.current) return;

        audioRef.current.play().catch(() => {
            // Autoplay blocked, user interaction required
        });

        const steps = 50;
        const stepDuration = fadeInDuration / steps;
        const volumeStep = maxVolume / steps;
        let currentStep = 0;

        fadeIntervalRef.current = window.setInterval(() => {
            if (!audioRef.current) return;

            currentStep++;
            audioRef.current.volume = Math.min(volumeStep * currentStep, maxVolume);

            if (currentStep >= steps) {
                if (fadeIntervalRef.current) {
                    clearInterval(fadeIntervalRef.current);
                }
            }
        }, stepDuration);
    }, [fadeInDuration, maxVolume]);

    const fadeOut = useCallback((duration = 1000) => {
        if (!audioRef.current) return;

        const currentVolume = audioRef.current.volume;
        const steps = 20;
        const stepDuration = duration / steps;
        const volumeStep = currentVolume / steps;
        let currentStep = 0;

        const fadeOutInterval = window.setInterval(() => {
            if (!audioRef.current) return;

            currentStep++;
            audioRef.current.volume = Math.max(currentVolume - volumeStep * currentStep, 0);

            if (currentStep >= steps) {
                clearInterval(fadeOutInterval);
                audioRef.current?.pause();
            }
        }, stepDuration);
    }, []);

    const play = useCallback(() => {
        audioRef.current?.play().catch(() => { });
    }, []);

    const pause = useCallback(() => {
        audioRef.current?.pause();
    }, []);

    const setVolume = useCallback((volume: number) => {
        if (audioRef.current) {
            audioRef.current.volume = Math.min(Math.max(volume, 0), 1);
        }
    }, []);

    return {
        audioRef,
        fadeIn,
        fadeOut,
        play,
        pause,
        setVolume,
    };
};
