import { motion } from "framer-motion";

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 🔮 Main Blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌊 Secondary Blob */}
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* 💫 Tertiary Blob */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-2xl"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 60, 0],
          scale: [0.9, 1.3, 0.7, 0.9],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
};

export default AnimatedGradient;
