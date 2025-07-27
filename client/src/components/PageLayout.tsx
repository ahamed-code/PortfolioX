import { motion } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
   <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="min-h-screen pt-20 overflow-x-hidden"
>

      {children}
    </motion.div>
  );
};

export default PageLayout;
