import { useState } from "react";
import Celebration from "./Celebration";

export default function Proposal({ answered }) {
  const [answer, setAnswer] = useState(answered);

  const send = async (ans) => {
    await fetch("http://localhost:5000/api/love/proposal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        password: "loveforever123",
      },
      body: JSON.stringify({ answer: ans }),
    });
    setAnswer(ans);
  };

  if (answer === "YES") return <Celebration />;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center mt-10">
      <div className="text-6xl mb-4">💍</div>
      <h2 className="text-3xl font-bold mb-4">Will You Marry Me?</h2>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => send("YES")}
          className="bg-pink-500 text-white px-8 py-3 rounded-xl"
        >
          💖 YES
        </button>
        <button
          onClick={() => send("NO")}
          className="bg-gray-300 px-8 py-3 rounded-xl"
        >
          💔 NO
        </button>
      </div>
    </div>
  );
}
