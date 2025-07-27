
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import AnimatedGradient from "../components/AnimatedGradient";

const CallToAction = () => {
  return (
    <PageLayout>
      <div className="relative min-h-screen flex items-center justify-center">
        <AnimatedGradient />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Let's Build Something Amazing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto"
          >
            Ready to turn your ideas into reality? I'm here to help you create 
            exceptional digital experiences that your users will love.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
                  filter: "blur(0px) brightness(1.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl text-white shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Hire Me Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            
            <Link to="/projects">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  borderColor: "rgba(59, 130, 246, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border-2 border-blue-500 rounded-full font-bold text-xl text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                View My Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-20"
                animate={{
                  x: [0, 100, -100, 0],
                  y: [0, -100, 100, 0],
                  scale: [1, 1.5, 0.5, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CallToAction;
