// components/FloatingAudioToggle.tsx
import { useAudio } from "../context/AudioContext";
import { motion } from "framer-motion";

const FloatingAudioToggle = () => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <motion.button
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
className="fixed top-[72px] right-6 z-50 text-2xl text-white p-3 rounded-full hover:bg-white/10 transition-opacity duration-300"

    >
      {isMuted ? "🔇" : "🔊"}
    </motion.button>
  );
};

export default FloatingAudioToggle;
