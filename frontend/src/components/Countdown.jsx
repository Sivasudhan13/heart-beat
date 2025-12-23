import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({ title, targetDate }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (!targetDate) return;

    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!time) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-pink-200 p-6 rounded-2xl shadow-lg text-center"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>

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
