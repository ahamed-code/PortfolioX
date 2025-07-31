import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import basheer from '../IMAGES/BASHEER.png';

const About = () => {
  return (
    <PageLayout>
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 relative z-10">

        <ParticlesBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating responsive web applications.
            </p>
          </motion.div>

          {/* Image and main info section */}
         <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-20 items-center z-10">

            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="flex justify-center flex-1 w-full"
            >
              <div className="flex flex-col items-center relative">
                <div className="w-28 sm:w-40 md:w-64 lg:w-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl overflow-hidden">
                  <img src={basheer} alt="Your Avatar" className="w-full h-full object-cover rounded-full aspect-square" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left flex-1 w-full"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Full-Stack Developer</h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                I'm a passionate FullStackdeveloper as a Fresher. I'm still growing and learning every day, but I've already worked on building simple, functional, and user-friendly applications. I enjoy working with technologies like React, Node.js, and other modern web tools to improve my skills and create useful projects.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6">
                {["Reactjs", "TypeScript", "Node.js", "Python", "Firebase", "Solidity", "Git & Github", "Django"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              grid grid-cols-2 
              md:grid-cols-4 
              gap-4 sm:gap-6 md:gap-8 
              mt-10 sm:mt-16
            "
          >
            {[
              { number: "6+", text: "Tech Stacks Mastered" },
              { number: "3+", text: "Internships & Projects" },
              { number: "2", text: "Hackathons Participated" },
              { number: "📚", text: "Self-Taught & Certified" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-blue-700"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-xs sm:text-base text-gray-300">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
