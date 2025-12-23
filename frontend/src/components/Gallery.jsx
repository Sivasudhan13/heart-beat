import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/images/1.jpg", "/images/2.jpg"]; // add more as needed

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Gallery image ${i + 1}`}
          className="rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      ))}
    </div>
  );
}
