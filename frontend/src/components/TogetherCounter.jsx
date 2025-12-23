import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TogetherCounter({ startDate }) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const start = new Date(startDate).getTime();

    const timer = setInterval(() => {
      const diff = Date.now() - start;

      setTime({
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
        days: Math.floor(diff / (1000 * 60 * 60 * 24)) % 365,
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-pink-200 p-6 rounded-2xl shadow-lg text-center"
    >
      <h2 className="text-xl font-bold mb-4">💍 Together Since 16/12/2020</h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {Object.entries(time).map(([k, v]) => (
          <div key={k} className="bg-white px-4 py-2 rounded-lg">
            <p className="text-lg font-bold">{v}</p>
            <p className="text-sm">{k}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
