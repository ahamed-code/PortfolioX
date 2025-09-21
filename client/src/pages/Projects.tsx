import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";

// images
import ecom from "../../dist/assets/ecommmerce.png";
import Q961 from "../../dist/assets/q96-1.png";
import placemate from "../../dist/assets/under.jpeg";
import folio from "../../dist/assets/port.png";
import cryp from "../../dist/assets/cryp.png";
import tube from "../../dist/assets/notetube.png";

// ----- Types -----
interface Project {
  id: number;
  title: string;
  description?: string;
  image: string;
  tech: string[];
  liveDemo?: string;
  Github?: string;
  soon?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title:
        "Q96 - Finance planner Prototype integrates the financial goals of peoples",
      image: Q961,
      tech: ["Python", "Streamlit", "Tensorflow", "Sklearn", "XGBoost"],
      liveDemo: "https://lbzqdneflan72wdyxcrigt.streamlit.app/",
      Github: "https://github.com/ahamed-code/Q96",
    },
    {
      id: 2,
      title:
        "PLACEMATE - A friendly mate to help the user to get job with confidence (under development)",
      image: placemate,
      tech: ["React", "Typescript", "Tailwindcss", "Mongodb", "Firebase"],
      Github: "https://github.com/ahamed-code/PLACEMATE",
      soon: "#soon",
    },
    {
      id: 3,
      title: "My Digiversion",
      description: "A website showcases my skills and projects for respectable HR 😊",
      image: folio,
      tech: ["React", "Firebase", "TypeScript", "Tailwind", "Github"],
      liveDemo: "https://vercel.com/ahamed-codes-projects",
      Github: "https://github.com/ahamed-code/PortfolioX",
    },
    {
      id: 4,
      title:
        "CRYPVISTA - A prototype that shows the realtime and predicted prices of cryptocurrencies",
      image: cryp,
      tech: ["Python", "Streamlit", "Tensorflow", "Sklearn", "LSTM"],
      liveDemo: "https://crypvista-vmzaffttwffldcsm9r6wx3.streamlit.app/",
      Github: "https://github.com/ahamed-code/CRYPVISTA",
    },
    {
      id: 5,
      title: "E-commerce platform",
      description: "Simple e-commerce prototype",
      image: ecom,
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://ahamed-code.github.io/ECOMMERCE/index.html",
      Github: "https://ahamed-code.github.io/ECOMMERCE/index.html",
    },
    {
      id: 6,
      title: "Notetube - note taking from YouTube videos",
      description: "Take notes while watching YouTube videos",
      image: tube,
      tech: ["Python", "Streamlit", "Tensorflow", "Sklearn", "LSTM"],
      liveDemo: "https://notetube-cqkehranc28m86463hamaf.streamlit.app/",
      Github: "https://github.com/ahamed-code/NOTETUBE",
    },
  ];

  return (
    <PageLayout>
      <section
        id="projects"
        className="min-h-screen bg-black-800/50 flex items-center justify-center"
      >
        <div className="container mx-auto px-4 py-20">
          <ParticlesBackground />

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group rounded-xl shadow-2xl overflow-hidden cursor-pointer"
                onDoubleClick={() => {
                  if (project.liveDemo) {
                    window.open(project.liveDemo, "_blank");
                  } else if (project.Github) {
                    window.open(project.Github, "_blank");
                  }
                }}
              >
                {/* Project Image */}
                <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <div className="flex gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.Github && (
                      <a
                        href={project.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
