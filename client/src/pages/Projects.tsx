import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

const projects = [
  {
    id: 1,
    title: "Q96 - Finance planner",
    description: "Prototype integrates the financial goals of peoples ",
    image: "🛒",
    tech: ["Python", "Streamlit", "Tensorflow", "Sklearn", "XGBoost"],
    color: "from-purple-500 to-pink-500",
    liveDemo: "https://lbzqdneflan72wdyxcrigt.streamlit.app/",
  },
  {
    id: 2,
    title: "PLACEMATE",
    description: "A friendly mate to help the user to get job with confidence (under development)",
    image: "📊",
    tech: ["React", "Typescript", "Tailwindcss", "Mongodb", "Firebase"],
    color: "from-blue-500 to-cyan-500",
    Github: "https://github.com/ahamed-code/PLACEMATE",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A website showcases my skills and projects for respectable HR 😊",
    image: "✅",
    tech: ["React", "Firebase", "TypeScript", "Tailwind", "Github"],
    color: "from-purple-500 to-blue-600",
    liveDemo: "https://vercel.com/ahamed-codes-projects",
  },
  {
    id: 4,
    title: "CRYPVISTA",
    description: "A prototype that shows the realtime and predicted prices of cryptocurrencies",
    image: "🤖",
    tech: ["python", "streamlit", "tensorflow", "sklearn", "LSTM"],
    color: "from-orange-500 to-red-500",
    liveDemo: "https://crypvista-vmzaffttwffldcsm9r6wx3.streamlit.app/",
  }
];
  return (
    <PageLayout>
       <div className="container mx-auto px-4 lg:px-20 relative z-10">
  
        <ParticlesBackground />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-none bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() =>
                  setSelectedProject(selectedProject === project.id ? null : project.id)
                }
              >
                <div
                  className={`bg-gradient-to-br ${project.color} p-6 rounded-xl shadow-2xl flex flex-col items-center`}
                >
                  <div
                    className={`text-6xl mb-4 w-20 h-20 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    {project.image}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />

                  <motion.div
                    initial={false}
                    animate={{ height: selectedProject === project.id ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="pt-4 border-t border-gray-600"
                      >
                        <div className="flex gap-4">
                          <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            Live Demo
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
