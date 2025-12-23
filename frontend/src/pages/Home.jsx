import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import MusicPlayer from "../components/MusicPlayer";
import Message from "../components/Message";
import Gallery from "../components/Gallery";
import SecretLetter from "../components/SecretLetter";
import Proposal from "../components/Proposal";
import TogetherCounter from "../components/TogetherCounter";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/love")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="text-center mt-20">Loading ❤️</p>;

  const unlocked = new Date() >= new Date(data.anniversary);

  const getNextBirthday = (birthday) => {
    const now = new Date();
    const next = new Date(birthday);
    next.setFullYear(now.getFullYear());

    if (next < now) {
      next.setFullYear(now.getFullYear() + 1);
    }
    return next;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-red-300 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        💖 Our Love Story 💖
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Countdown
          title="🎂 Next Birthday (13/08)"
          targetDate={getNextBirthday(data.birthday)}
        />

        <TogetherCounter startDate={data.anniversary} />
      </div>

      <Message en={data.messageEn} ta={data.messageTa} />
      <Gallery images={data.images} />
      <SecretLetter unlocked={unlocked} />
      <Proposal answered={data.proposalAnswer} />

      <MusicPlayer />
    </div>
  );
}
