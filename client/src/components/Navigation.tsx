import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const Navigation = () => {
  const [location, navigate] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/achievements", label: "Achievements" },
    { path: "/contact", label: "Hire me" },
    { path: "/profiles", label: "Profiles" },
  ];

  const handleHomeClick = () => {
    if (location === "/home" || location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home");
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Basheer_Ahamed_Resume.pdf";
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={handleResumeDownload}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
            title="Download Resume"
          >
            BASHEER AHAMED A
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-9">
            {navItems.map((item) => {
              const isActive =
                location === item.path ||
                (item.path === "/home" && location === "/");

              if (item.label === "Home") {
                return (
                  <button
                    key={item.path}
                    onClick={handleHomeClick}
                    className={`relative transition-colors ${
                      isActive
                        ? "text-purple-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                      />
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative transition-colors ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  } ${
                    item.label === "Hire me"
                      ? "animate-pulse font-bold text-white drop-shadow-[0_0_8px_white]"
                      : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile nav menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-800 py-4"
          >
            {navItems.map((item) => {
              const isActive =
                location === item.path ||
                (item.path === "/home" && location === "/");

              if (item.label === "Home") {
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleHomeClick();
                    }}
                    className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 transition-colors ${
                    isActive
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  } ${
                    item.label === "Hire me"
                      ? "animate-pulse font-bold text-white drop-shadow-[0_0_8px_white]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
