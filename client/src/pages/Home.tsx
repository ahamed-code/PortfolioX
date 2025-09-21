import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedGradient from "../components/AnimatedGradient";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";
import aham2 from '../IMAGES/aham (2).png';
import csAndCr from '../IMAGES/cs and cr.png';
import codeRelay from '../IMAGES/code relay.png';
import ucevWebPres from '../IMAGES/ucev web pres.png';
import milestone from '../IMAGES/milestone.png';
import nehruPaperPres from '../IMAGES/nehru paper pres.png';
import nehruPaper from '../IMAGES/nehru paper.png';
import magEdits from '../IMAGES/mag edits.png';
import magCerti from '../IMAGES/mag certi.png';
import multi1 from '../IMAGES/multi1.png';
import ifetTimes from '../IMAGES/ifet times.png';
import nan from '../IMAGES/nan.jpeg';
import st from '../IMAGES/st.jpeg';
import ahamg from '../IMAGES/aham(3).png';
import basheer from '../IMAGES/BASHEER.png';
import { useAudio } from "../context/AudioContext";
import AudioToggle from "../components/AudioToggle"; 
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa"; // add this to your imports
import resume from "../../dist/assets/BASHEER AHAMED A  resume.pdf";
import ecom from "../../dist/assets/ecommmerce.png";
import Q961 from "../../dist/assets/q96-1.png";
import  placemate from "../../dist/assets/under.jpeg";
import  folio from "../../dist/assets/port.png";
import cryp from "../../dist/assets/cryp.png";
import tube from "../../dist/assets/notetube.png";

const skills = [
  { name: "Reactjs", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
  { name: "Node.js", level: 90, color: "from-green-500 to-pink-400" },
  { name: "Python", level: 80, color: "from-yellow-500 to-blue-500" },
  { name: "MongoDB", level: 80, color: "from-green-500 to-green-500" },
  { name: "Solidity", level: 50, color: "from-blue-400 to-blue-600" },
  { name: "Git & Github", level: 90, color: "from-red-600 to-green-600" },
];

const projects = [
  {
    id: 1,
    title: "Q96 - Finance planner Prototype integrates the financial goals of peoples",
    image:  Q961,
    tech: ["Python", "Streamlit", "Tensorflow", "Sklearn", "XGBoost"],
    color: "from-purple-500 to-pink-500",
    liveDemo: "https://lbzqdneflan72wdyxcrigt.streamlit.app/",
    Github:"https://github.com/ahamed-code/Q96"
  },
  {
    id: 2,
    title: "PLACEMATE - A friendly mate to help the user to get job with confidence(under development)",
    image:placemate,
    tech: ["React", "Typescript", "Tailwindcss", "Mongodb", "Firebase"],
    color: "from-blue-500 to-cyan-500",
    Github: "https://github.com/ahamed-code/PLACEMATE",
    soon:"#soon"
  },
  {
    id: 3,
    title: "My Digiversion",
    description: "A website showcases my skills and projects for respectable HR 😊",
    image: folio,
    tech: ["React", "Firebase", "TypeScript", "Tailwind", "Github"],
    color: "from-purple-500 to-blue-600",
    liveDemo: "https://vercel.com/ahamed-codes-projects",
    Github:"https://github.com/ahamed-code/PortfolioX"
  },
  {
    id: 4,
    title: "CRYPVISTA - A prototype that shows the realtime and predicted prices of cryptocurrencies",
    image: cryp,
    tech: ["python", "streamlit", "tensorflow", "sklearn", "LSTM"],
    color: "from-orange-500 to-red-500",
    liveDemo: "https://crypvista-vmzaffttwffldcsm9r6wx3.streamlit.app/",
    Github:"https://github.com/ahamed-code/CRYPVISTA" 
  },

  {
    id:5,
    title: "E-commerce platform",
    description: "A prototype that shows the realtime and predicted prices of cryptocurrencies",
    image: ecom,
    tech: ["python", "streamlit", "tensorflow", "sklearn", "LSTM"],
    color: "from-orange-500 to-red-500",
    liveDemo: "https://ahamed-code.github.io/ECOMMERCE/index.html",
    Github:"https://ahamed-code.github.io/ECOMMERCE/index.html"
  },
  {
    id:5,
    title: "Notetube - note taking from youtube videos",
     description: "A prototype that shows the realtime and predicted prices of cryptocurrencies",
    image: tube,
    tech: ["python", "streamlit", "tensorflow", "sklearn", "LSTM"],
    color: "from-orange-500 to-red-500",
    liveDemo: "https://notetube-cqkehranc28m86463hamaf.streamlit.app/",
    Github:"https://github.com/ahamed-code/NOTETUBE"
  }
];

const Achievements = [
  {
    title: "Code Relay & Code Sprint Winner @IFET 2nd Prize",
    description: "Secured 2nd place in a competitive coding relay and sprint event at IFET College of Engineering, showcasing problem-solving skills and teamwork.",
    date: "2025-03-10",
    position: "Problem solved in python",
    images: [csAndCr, codeRelay]
  },
  {
    title: "Web Presentation @UCEV TINDIVANAM 1st Prize",
    description: "We got 1st prize creation of dynamic virtual art gallery website when we upload pics it make a art gallery and also people can simulate it ",
    date: "2025-09-19",
    position: "Created a virtual art gallery using three.js and my friend created a frontend interface ",
    images: [ucevWebPres, milestone]
  },
  {
    title: "Paper Presentation @ Nehru College 2nd Prize",
    description: "Presented a technical paper at Nehru College, demonstrating my contribution in payanam project.and we got 2nd prize.",
    date: "2024-04-16",
    position: "Development of payanam project",
    images: [nehruPaperPres, nehruPaper]
  },
  {
    title: "Contributor in IFET TIMES",
    description: "Conntributed in making a magazine for IFET college of engineering, showcasing my writing and design skills.",
    date: "2024-01-05",
    position: "Interface and a content extractor ",
    images: [magEdits, magCerti]
  },
  {
    title: "CONTRIBUTOR IN MY COLLEGE MULTIMEDIA CLUB @IFET",
    description: "Contributed to the IFET Multimedia Club, enhancing my skills in multimedia content creation about our college events.",
    date: "2025-03-01",
    position: "Participant",
    images: [multi1, ifetTimes]
  },
  {
    title: "Participated hackathon @NANDHA ENGINEERING COLLEGE & @St. JOSEPH COLLEGE OF ENGINEERING",
    description: "Gives better understanding of how to work in a team and how to solve problems in a given time frame.",
    date: "2024-01-05",
    position: "Worked on backend development in django ",
    images: [nan, st]
  }
];

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub size={48} className="text-white" />,
    description: "Open source contributions and repositories",
    stats: "5+ repositories",
    url: "https://github.com/ahamed-code",
    color: "from-[#232c3d] to-[#293042]"
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={48} className="text-yellow-400" />,
    description: "Real world problem solving of my journey",
    stats: "50+ Problems Solved",
    url: "https://leetcode.com/u/hitmanbasheer/",
    color: "from-orange-400 to-pink-500"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={48} className="text-white" />,
    description: "Network makes a worthy Venture ",
    stats: "500+ connections",
    url: "https://www.linkedin.com/in/basheer-ahamed-7a791124b",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={48} className="text-red-500" />, // We'll add border styling below!
    description: "Content creation on quran and hadith",
    stats: "50+ videos",
    url: "https://www.youtube.com/@Islamiccontdaham",
    color: "from-blue-500 to-red-500"
  }
];

const achievementsStats = [
  { number: "6+", label: "Tech Stacks Mastered (React, Node, Solidity...)" },
  { number: "3", label: "Internships & Projects Completed" },
  { number: "2", label: "Hackathons Participated" },
  { number: "50+", label: "Leetcode Problems Solved" }
];

const Home = () => {
  // Audio Toggle is now GLOBAL. Just use the context for 'isMuted' or to trigger sound effects if needed:
const { isMuted } = useAudio();
const [showScroll, setShowScroll] = useState(false);
  // FORM STATE
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Optional: Sound effects, NOT background music!
useEffect(() => {
  const handleScroll = () => {
    setShowScroll(window.scrollY > 200);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_q4c5m2f",
        "template_hdom0vl",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "hitmanbasheer@gmail.com",
        },
        "g5rQZQpYViff8bTOw"
      )
      .then(() => setIsSubmitted(true))
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };
 

  return (
    <PageLayout>
     
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute top-[72px] right-6 z-20"> 
        <AudioToggle />
         </div>
        <ParticlesBackground />
        <AnimatedGradient />
        
        <img
          src={aham2}
          alt="Background image"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-full object-cover z-0 opacity-20"
        />
        <div className="relative z-10 px-4 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            
<Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("BASHEER AHAMED A")
      .start();
  }}
/>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            <Typewriter options={{
              strings: ["I'm a Fullstack Developer","I'm Introductory Dapp developer","Innovative problem solver"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}/>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg">
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-white rounded-full font-semibold text-white hover:bg-white/10">
              Hire Me
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-green-500 rounded-full font-semibold text-green-400 hover:bg-green-500/10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-400 hover:text-white transition-colors">
            ↓ Scroll to explore
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative min-h-screen py-20 px-6 sm:px-10 bg-black-900/50">
  <ParticlesBackground />
  
  <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20 relative z-10">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      About Me
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Passionate developer creating digital experiences that matter
    </p>
  </motion.div>
  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
      <div className="flex flex-col items-center relative">
        <div className="w-40 sm:w-64 md:w-80 lg:w-96 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl overflow-hidden">
          <img src={basheer} alt="Your Avatar" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-6 text-center lg:text-left">
      <h2 className="text-3xl font-bold text-white mb-4">Full-Stack Developer</h2>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        I'm a passionate FullStackdeveloper as a Fresher. I'm still growing and learning every day, but I've already worked on building simple, functional, and user-friendly applications. I enjoy working with technologies like React, Node.js, and other modern web tools to improve my skills and create useful projects.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
        {["Reactjs", "TypeScript", "Node.js", "Python", "MongoDB", "Solidity","Git & Github","Django"].map((skill) => (
          <motion.span key={skill} whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 z-10"
  >
    {achievementsStats.map((achievement, index) => (
      <motion.div
        key={achievement.label}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
        className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-blue-700"
      >
        <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.1 }}
          className="text-3xl font-bold text-purple-400 mb-2">
          {achievement.number}
        </motion.h4>
        <p className="text-gray-300">{achievement.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


    {/* PROJECTS */}
<section id="projects" className="min-h-screen bg-black-800/50 flex items-center justify-center">
  <div className="container mx-auto px-4 py-20">
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
  {typeof project.image === "string" && project.image.length === 1 ? (
    // Emoji
    <span className="text-7xl md:text-8xl flex items-center justify-center h-full w-full">
      {project.image}
    </span>
  ) : (
    // Imported image OR URL
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  )}
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


      {/* ACHIEVEMENTS */}
      <section id="achievements" className="min-h-screen bg-black-900/50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Highlights of my proudest accomplishments and milestones
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-12">
            {Achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-black-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-700 cursor-pointer shadow-lg"
              >
                <div
                  className={`grid ${item.images.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-4 mb-6`}
                >
                  {item.images.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className={`w-full overflow-hidden rounded-xl border border-gray-600 bg-gray-800 ${
                        item.title.includes("UCEV") || item.title.includes("Nehru College") ? "aspect-[4/3]" : ""
                      }`}
                    >
                      <img src={imgSrc} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.position}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section id="skills" className="min-h-screen bg-black-800/50 flex items-center justify-center">
  <div className="container mx-auto px-4 py-20">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Skills
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Technologies and tools I work with
      </p>
    </motion.div>
    <div className="max-w-4xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <span className="text-gray-300">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* PROFILES */}
      <section id="profiles" className="min-h-[60vh] bg-black-900/50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
               Profiles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with me across different platforms
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {profiles.map((profile, index) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${profile.color} p-8 rounded-xl shadow-2xl relative overflow-hidden`}>
                    <div className="text-6xl mb-4">{profile.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                    <p className="text-gray-200 mb-4">{profile.description}</p>
                    <p className="text-sm text-gray-300 font-semibold">{profile.stats}</p>
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative min-h-screen bg-black-900/50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
          <img
            src={ahamg}
            alt="Background"
            className="w-[500px] sm:w-[600px] md:w-[700px] xl:w-[800px] object-contain opacity-20 mb-0"
            style={{ maxHeight: "80vh" }}
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              HIRE ME
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out! <br />
              & <br />I want to be a part of your journey
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder=" Enter your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder=" Enter your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell me how can I assist you"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg"
                >
                  Let's Connect
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">❤️</div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
       {/* ===== SCROLL-TO-TOP BUTTON ===== */}
   {showScroll && (
        <button
          aria-label="Scroll to top"
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-40 p-0.5 sm:p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <FaArrowUp className="text-white text-2xl sm:text-3xl" />
        </button>
)}


      {/* ===== FOOTER ===== */}
      <footer className="w-full mt-10 py-6 bg-black bg-opacity-60 text-center text-lg text-gray-200 font-semibold tracking-wide">
       This website is  Made by <span className="text-pink-400">  Ahamed</span>
      </footer>
    </PageLayout>
  );
};

export default Home;
