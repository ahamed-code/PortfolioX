import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
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

const achievements = [
  {
    title: "Code Relay & Code Sprint Winner @IFET 2nd Prize",
    description: "Secured 2nd place in a competitive coding relay and sprint event at IFET College of Engineering, showcasing problem-solving skills and teamwork.",
    date: "2025-03-10",
    position: "Problem solved in python",
    images:[csAndCr, codeRelay]
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
    position: "Interface and a content extractor",
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
    position: "Worked on backend development in django",
    images: [nan, st]
  },
];

const Achievements = () => {
  return (
    <PageLayout>
      <section id="achievements" className="min-h-screen bg-black-900/50 flex items-center justify-center">
        <ParticlesBackground />
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
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-black-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-700 shadow-lg"
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-3 leading-relaxed">{item.description}</p>
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
    </PageLayout>
  );
};

export default Achievements;
