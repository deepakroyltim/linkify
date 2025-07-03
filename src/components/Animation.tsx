import { motion } from "framer-motion";
import { BsQrCode, BsLink } from "react-icons/bs";

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated Circle with Centered Link Icon */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 flex items-center justify-center"
        initial={{ x: -100, y: 0 }}
        animate={{ x: 100, y: 200 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BsLink className="w-10 h-10 text-black opacity-50" />
      </motion.div>

      {/* Animated Circle with Centered QR Code Icon */}
      <motion.div
        className="absolute w-24 h-24 bg-pink-300 rounded-full opacity-30 flex items-center justify-center"
        initial={{ x: 200, y: -100 }}
        animate={{ x: -100, y: 300 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <BsQrCode className="w-10 h-8 text-white opacity-50" />
      </motion.div>
    </>
  );
};

export default AnimatedBackground;
