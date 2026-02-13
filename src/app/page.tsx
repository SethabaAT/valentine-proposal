"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import FloatingHearts from "@/components/FloatingHearts";
import SuccessGallery from "@/components/SuccessGallery";

export default function Home() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const yesButtonSize = noCount * 20 + 16; // Base size 16px, grows by 20px each time

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const describeNo = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? (With puppy eyes)",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    setYesPressed(true);
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#Fb2458', '#FF0000', '#FFFFFF']
    });
  };

  if (yesPressed) {
    return (
      <main className="min-h-screen bg-pink-100 selection:bg-pink-200">
        <FloatingHearts />
        <SuccessGallery />
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden relative selection:bg-pink-300">
      <FloatingHearts />

      <div className="z-10 text-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Cute animated bear gif placeholder or generic cute image */}
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute bear with roses"
            className="w-48 h-48 mx-auto rounded-lg object-cover mix-blend-multiply"
          />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black text-pink-600 mb-8 tracking-tight drop-shadow-sm font-serif">
          Will you be my Valentine?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow-lg transition-all duration-200"
            style={{ fontSize: yesButtonSize, padding: '16px 32px' }}
            onClick={handleYesClick}
          >
            Yes
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded shadow-lg transition-all duration-200"
            onClick={handleNoClick}
          >
            {describeNo()}
          </button>
        </div>
      </div>
    </main>
  );
}
