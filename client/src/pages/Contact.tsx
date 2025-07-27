import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import ahamg from '../IMAGES/aham(3).png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  };
  

return (
  <PageLayout>
    <div className="relative flex flex-col items-center justify-center min-h-screen h-screen w-full overflow-hidden z-10 bg-black-900/50">
      <ParticlesBackground />

      {/* Background image with motion effect */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <motion.img
          src={ahamg}
          alt="Background"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // subtle up-down motion
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[90%] sm:w-[500px] md:w-[650px] lg:w-[750px] xl:w-[850px] max-w-[90vw] h-auto object-contain opacity-20 translate-y-[20%] md:translate-y-[30%] lg:translate-y-[35%]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            HIRE ME
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I want to be a part of your journey 😊
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="w-full z-10">
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-black-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell me how I can help you"
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg"
              >
                Let’s Connect
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Message Sent!
              </h2>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  </PageLayout>
);
};

export default Contact;
