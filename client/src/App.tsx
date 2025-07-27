import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import Router from "./Router";
import { AudioProvider } from "./context/AudioContext";
import FloatingAudioToggle from "./components/AudioToggle";
import EmojiTrail from "./components/EmojiTrail";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AudioProvider>
          <div className="min-h-screen bg-[hsl(0,0%,0%)]">
            <FloatingAudioToggle />
            <Toaster />
            <Router />
            <EmojiTrail />
          </div>
        </AudioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
