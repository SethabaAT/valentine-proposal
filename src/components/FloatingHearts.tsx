"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            size: Math.random() * 20 + 10,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((h) => (
                <Heart
                    key={h.id}
                    fill="currentColor"
                    className="text-pink-300 floating-heart opacity-50"
                    style={{
                        left: `${h.left}%`,
                        animationDelay: `${h.delay}s`,
                        width: h.size,
                        height: h.size,
                    }}
                />
            ))}
        </div>
    );
}
