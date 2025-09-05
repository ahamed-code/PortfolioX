import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 90, color: "from-green-500 to-green-400" },
    { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
    { name: "Firebase", level: 75, color: "from-orange-500 to-red-500" },
    { name: "Solidity", level: 50, color: "from-blue-400 to-blue-600" },
    { name: "Git & Github", level: 90, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <PageLayout>
      <div className="overflow-hidden container mx-auto px-4 lg:px-20 relative z-10">
  <ParticlesBackground />

  {/* This container is the main suspect causing overflow */}
  <div className="mx-auto px-4 lg:px-16 relative z-10 max-w-screen-xl w-full overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Technologies and tools I work with
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto w-full">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white">
              {skill.name}
            </h3>
            <span className="text-gray-300">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${skill.level}%` : 0 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </PageLayout>
  );
};

export default Skills;
