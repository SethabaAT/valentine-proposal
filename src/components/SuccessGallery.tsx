"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const memories = [
    {
        id: 1,
        url: "/images/first.jpg",
        message: "It all started in 2015, on one special day. If someone told me ten years later we would still be together I would have believed them 📅✨"
    },
    {
        id: 2,
        url: "/images/2020.jpg",
        message: "2020, This day still holds a special place in my heart. You looked beautiful as always �"
    },
    {
        id: 3,
        url: "/images/baecation.jpg",
        message: "This was also 2020, I remember we had our mini bae-cation. It was honestly very special but the location was the problem 😅🏨"
    },
    {
        id: 4,
        url: "/images/morning-baecation.jpg",
        message: "Even though the place had no swimming pools, nice views we actually had a live action movie the night before this day, I have never never laughed while being scared like that 👻😂"
    },
    {
        id: 5,
        url: "/images/morning-baecation.jpg",
        message: "Even though the place had no swimming pools, nice views we actually had a live action movie the night before this day �🍿"
    },
    {
        id: 6,
        url: "/images/memories.jpg", // Replace with your photo path, e.g., "/pic1.jpg"
        message: "You remember our mini picnic at Tzaneen? We literally spent all day there it was the best day ever, I wonder whose idea that was. 🧺🤔" // Replace with your message
    },
    {
        id: 7,
        url: "/images/2021-umbrella.jpg",
        message: " My favourite location on Earth is next to you. I love being around you MaSethaba 🌍❤️"
    },
    {
        id: 8,
        url: "/images/christmas-massage.jpg",
        message: " This was the second Christmas we spent together, the first one was in 2015, which is still the best Christmas ever 🎄🎅"
    },
    {
        id: 9,
        url: "/images/2023-draw.jpg",
        message: "2023, Made me realise that I am ready to take the next step. We literally been through everything that the world threw at us 💍�"
    },
    {
        id: 10,
        url: "/images/2023-groove.jpg",
        message: "2023, See what I mean, every chance we got we made sure that we enjoy ourselves. We were always there for each other 🥂✨"
    },
    {
        id: 11,
        url: "/images/2023-out.jpg",
        message: "2023, We always found a reason to go out, and that is something I love about us �🍽️"
    },
    {
        id: 12,
        url: "/images/2024-out.jpg",
        message: "2024, Another one of the random ones 🤪�"
    },
    {
        id: 13,
        url: "/images/2024-sandton.jpg",
        message: "2024, This day we ubered to three different places in one day, I wonder whose idea that was 🚕�"
    },
    {
        id: 14,
        url: "/images/2025.jpg",
        message: "2025, This year proved that we can be a great couple and parents, I am really proud of what we have achieved �🍼"
    },
    {
        id: 15,
        url: "/images/last.jpg",
        message: "I will always be thankful to God for bringing us together, and I will forever cherish the day I said hello to you for the first time because of that day I have gotten a partner, a friend, supporter, comforter and more. I love you MaSethaba �❤️"
    },
];

export default function SuccessGallery() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % memories.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            // Attempt to play automatically
            audioRef.current.play().catch(e => {
                console.log("Audio autoplay failed, user interaction needed", e);
            });
        }
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 text-center z-10 relative overflow-hidden"
        >
            <motion.h1
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-3xl md:text-5xl font-bold text-pink-600 mb-8 drop-shadow-sm font-serif z-20"
            >
                I love you! ❤️
            </motion.h1>

            {/* Audio Element */}
            <audio ref={audioRef} src="/song.mp3" loop />

            <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-pink-600 hover:bg-white transition-all"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>

            <div className="relative w-full max-w-md aspect-[3/4] bg-white/50 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border-4 border-white/80">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 p-4 flex flex-col items-center justify-center"
                    >
                        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner bg-pink-100">
                            <img
                                src={memories[currentSlide].url}
                                alt="Romantic memory"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6 pt-12 flex flex-col justify-end min-h-[120px]">
                                <p className="text-xl md:text-2xl text-white font-medium font-serif italic drop-shadow-lg">
                                    "{memories[currentSlide].message}"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
                    {memories.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-pink-600 w-8" : "bg-pink-300 hover:bg-pink-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-16 text-pink-500 font-semibold flex items-center gap-2"
            >
                Forever yours, Thabo <Heart className="fill-pink-500 animate-pulse" />
            </motion.div>
        </motion.div>
    );
}
