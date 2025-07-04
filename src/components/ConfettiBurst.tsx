import { motion } from "framer-motion";

const ConfettiBurst = () => {
  const sparkles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{
            delay: i * 0.2,
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute text-success text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
};

export default ConfettiBurst;
