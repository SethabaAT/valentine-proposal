"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const memories = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?blur=2&w=400&h=300&fit=crop",
        message: "Every moment with you is magic ✨"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?blur=2&w=400&h=300&fit=crop",
        message: "My favorite place is next to you 💑"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?blur=2&w=400&h=300&fit=crop",
        message: "Thank you for being my everything ❤️"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b9?blur=2&w=400&h=300&fit=crop",
        message: "I love you more than words can say 🌹"
    }
];

export default function SuccessGallery() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-screen p-8 text-center z-10 relative"
        >
            <motion.h1
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 drop-shadow-sm font-serif"
            >
                YAY! I love you! 💖
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.3 }}
                        className="bg-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 rotate-1 odd:-rotate-1"
                    >
                        <div className="overflow-hidden rounded-lg aspect-video mb-4 bg-pink-100 flex items-center justify-center">
                            <img
                                src={memory.url}
                                alt="Romantic memory"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-xl text-pink-800 font-medium font-serif italic">
                            {memory.message}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-12 text-pink-500 font-semibold"
            >
                Forever yours, Thabo ❤️
            </motion.div>
        </motion.div>
    );
}
