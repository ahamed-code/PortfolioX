import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useLocation } from "wouter";
import doorMp3 from "../../sounds/door.mp3";
import hrMp3 from "../../sounds/hr.mp3";
import student1Mp3 from "../../sounds/student1 (2).mp3";
import { useAudio } from "../context/AudioContext";

interface Props {
  onComplete?: () => void;
}

const IntroSelector = ({ onComplete }: Props) => {
  const [selected, setSelected] = useState<"hr" | "student" | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [voicePlayed, setVoicePlayed] = useState(false);
  const [displayText, setDisplayText] = useState("Awaiting Command...");
  const [, navigate] = useLocation();
const { playSound, isMuted } = useAudio(); // ✅ include isMuted!

const handleSelect = (type: "hr" | "student") => {
  setSelected(type);
  setShowGreeting(true);
  sessionStorage.setItem("playGreeting", type);

  if (!isMuted) {
    playSound(doorMp3); // ✅ play only if unmuted
  }

  const voicePath = type === "hr" ? hrMp3 : student1Mp3;
  sessionStorage.setItem("voiceGreeting", voicePath);
  setVoicePlayed(false);
};

const handleTypewriterDone = () => {
  if (voicePlayed) return;
  setVoicePlayed(true);

  const voicePath = sessionStorage.getItem("voiceGreeting");
  if (voicePath && !isMuted) {
    playSound(voicePath); // ✅ play only if unmuted
  }

  setShowFlash(true);
  setTimeout(() => {
    onComplete?.();
    navigate("/home");
  }, 1800);
};


  return (
    <div className="fixed inset-0 bg-black z-[9999] overflow-hidden">
      {/* 🚪 Left Door */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-50 origin-left"
        style={{
          background: "linear-gradient(135deg, #1a1a1a, #2c2c2c, #111)",
          transform: "skewY(-6deg)",
          borderRight: "2px solid gold",
          boxShadow: "inset -10px 0 30px rgba(255, 215, 0, 0.3), 4px 0 20px rgba(255,215,0,0.2)",
        }}
        animate={{ x: selected ? "-100%" : "0%" }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
      />

      {/* 🚪 Right Door */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-50 origin-right"
        style={{
          background: "linear-gradient(-135deg, #1a1a1a, #2c2c2c, #111)",
          transform: "skewY(6deg)",
          borderLeft: "2px solid gold",
          boxShadow: "inset 10px 0 30px rgba(255, 215, 0, 0.3), -4px 0 20px rgba(255,215,0,0.2)",
        }}
        animate={{ x: selected ? "100%" : "0%" }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
      />

      {/* 🟡 Door Handle (centered) */}
      {!selected && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[55] w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(255,215,0,0.8)] border-2 border-yellow-300" />
      )}

      {/* 🖥️ Digital Display */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[999] px-6 py-2 text-center text-[13px] sm:text-base font-mono tracking-widest rounded-md bg-[#000000dd] border border-yellow-400 shadow-[0_0_20px_gold] ring-2 ring-yellow-300/40 animate-pulse">
        <span className="text-yellow-300 drop-shadow-[0_0_4px_gold]">{displayText}</span>
      </div>

      {/* 🔘 Selection & Greeting */}
      <div className="relative z-[60] flex flex-col items-center justify-center h-full gap-10 text-white text-center">
        {!selected && (
          <>
            <h1 className="text-3xl md:text-5xl font-bold">Who's Visiting?</h1>
            <div className="flex gap-6">
              <motion.button
                onClick={() => handleSelect("student")}
                className="px-6 py-3 rounded-full text-yellow-100 font-bold bg-gradient-to-br from-black via-yellow-900 to-yellow-600 shadow-md border border-yellow-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Friend / Developer
              </motion.button>
              <motion.button
                onClick={() => handleSelect("hr")}
                className="px-6 py-3 rounded-full text-yellow-100 font-bold bg-gradient-to-br from-black via-yellow-900 to-yellow-600 shadow-md border border-yellow-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                HR / Recruiter
              </motion.button>
            </div>
          </>
        )}

        {showGreeting && selected && (
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold max-w-xl text-yellow-200">
            <Typewriter
              onInit={(typewriter) => {
                const greeting =
                  selected === "hr"
                    ? "Welcome to my portfolio, respectable Human Resource"
                    : "Welcome to the portfolio my friend";
                typewriter.typeString(greeting).callFunction(() => {
                  handleTypewriterDone();
                }).start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
                cursor: "⚡",
              }}
            />
          </div>
        )}
      </div>

      {/* ⚡ White Flash */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[9999] origin-center"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroSelector;
