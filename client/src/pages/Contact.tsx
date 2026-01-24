import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import ahamg from "../IMAGES/aham(3).png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ✅ INIT EMAILJS */
  useEffect(() => {
    emailjs.init("a1jytWG67_Z5oFExj"); // PUBLIC KEY ONLY
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        "service_h9m84x9",
        "template_nhhkkkc",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "ahamdeveloper01@gmail.com",
        },
        "trzOCWBoDKSsrfylr"
      );
  
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-black/50">
        <ParticlesBackground />

        {/* Floating Image */}
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          <motion.img
            src={ahamg}
            alt="Background"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[90%] md:w-[650px] opacity-20 translate-y-[30%]"
          />
        </div>

        <div className="relative z-10 max-w-2xl w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              HIRE ME
            </h1>
            <p className="text-gray-300 mt-4">
              I want to be a part of your journey 😊
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-6 py-4 bg-gray-800/60 rounded-lg text-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-6 py-4 bg-gray-800/60 rounded-lg text-white"
              />

              <textarea
                rows={6}
                placeholder="Tell me how I can help you"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-6 py-4 bg-gray-800/60 rounded-lg text-white resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold"
              >
                {loading ? "Sending..." : "Let’s Connect"}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">❤️</div>
              <h2 className="text-3xl font-bold text-white">
                Message Sent!
              </h2>
              <p className="text-gray-300 mt-2">
                I’ll get back to you soon 🚀
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
