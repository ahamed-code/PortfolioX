import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroSelector from "./components/IntroSelector";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Profiles from "./pages/Profiles";
import NotFound from "@/pages/not-found"; // or correct path

function Router() {
  const [location] = useLocation();
  const [showIntro, setShowIntro] = useState(false);
  const [introCompleted, setIntroCompleted] = useState(false);

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    const isReload = navEntry?.type === "reload";
    const introSeen = sessionStorage.getItem("introSeen");

    if (!introSeen || isReload) {
      setShowIntro(true);
    } else {
      setIntroCompleted(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introSeen", "true");
    setShowIntro(false);
    setIntroCompleted(true);
  };

  if (showIntro) {
    return <IntroSelector onComplete={handleIntroComplete} setAudioRef={() => {}} />;
  }

  if (!introCompleted) {
    return (
      <div className="w-full h-screen bg-[hsl(240,10%,3.9%)] flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
    <div className="w-screen overflow-x-hidden"> 
      <Navigation />
      <AnimatePresence mode="wait">
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/contact" component={Contact} />
          <Route path="/profiles" component={Profiles} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      </div>
    </>
  );
}

export default Router;
