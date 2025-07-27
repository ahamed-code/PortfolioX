// context/AudioContext.tsx
import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AudioCtxProps {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (src: string) => void;
}

const AudioContext = createContext<AudioCtxProps>({
  isMuted: false,
  toggleMute: () => {},
  playSound: () => {},
});

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 1;
    }
  }, [isMuted]);

  const playSound = (src: string) => {
    if (!src) return;

    // Reuse the same ref
    if (!audioRef.current) {
      audioRef.current = new Audio();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current.src = src;
    audioRef.current.volume = isMuted ? 0 : 1;

    audioRef.current
      .play()
      .catch((err) =>
        console.warn("Playback failed (gesture required?):", err)
      );
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </AudioContext.Provider>
  );
};
