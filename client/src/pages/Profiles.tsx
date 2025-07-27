import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
    stats: "Journey has started",
    url: "https://leetcode.com/progress/",
    color: "from-orange-400 to-pink-500"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={48} className="text-white" />,
    description: "Network makes a worthy Venture ",
    stats: "200+ connections",
    url: "https://www.linkedin.com/in/basheer-ahamed-7a791124b",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "YouTube",
    icon: <FaYoutube size={48} className="text-red-500" />, // We'll add border styling below!
    description: "Content creation on spreading Islamic advice",
    stats: "50+ videos",
    url: "https://www.youtube.com/@Islamiccontdaham",
    color: "from-blue-500 to-red-500"
  }
];


const Profile = () => (
  <PageLayout>
    <div className="overflow-hidden container mx-auto px-4 lg:px-20 relative z-10">
      <ParticlesBackground /> {/* If `mouseInteractive` not supported, use your own props API */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-3 font-serif bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with me across different platforms
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">
          {profiles.map((profile, idx) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.14 }}
                whileHover={{ scale: 1.03, y: -7 }}
                className={`bg-gradient-to-br ${profile.color}
                  rounded-2xl shadow-xl px-8 py-8 min-h-[230px] flex flex-col justify-between transition-all duration-300`}
              >
                <div>
                  <div className="mb-5">{profile.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">{profile.name}</div>
                  <div className="text-white/85 text-base mb-3">{profile.description}</div>
                </div>
                <div className="mt-auto font-semibold text-[1rem] text-white/85">{profile.stats}</div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Profile;
