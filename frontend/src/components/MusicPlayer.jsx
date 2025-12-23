import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div
      onClick={toggle}
      className="fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full cursor-pointer"
    >
      {playing ? "⏸ Music" : "▶ Music"}
      <audio ref={audioRef} src="/music/love.mp3" loop />
    </div>
  );
}
