import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsQrCode, BsLink } from "react-icons/bs";

const AnimatedBackgroundTwo = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    // Optional: update on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Only render when screenWidth is available */}
      {screenWidth > 0 && (
        <>
          <motion.div
            className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 flex items-center justify-center"
            initial={{ x: 10, y: -50 }}
            animate={{ x: 10, y: 200 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BsLink className="w-10 h-10 text-black opacity-50" />
          </motion.div>

          <motion.div
            className="absolute w-24 h-24 bg-pink-300 rounded-full opacity-30 flex items-center justify-center"
            initial={{ x: 150, y: -50 }}
            animate={{ x: 150, y: 300 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BsQrCode className="w-10 h-8 text-white opacity-50" />
          </motion.div>

          {/* <motion.div
            className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 flex items-center justify-center"
            initial={{ x: screenWidth - 150, y: -50 }}
            animate={{ x: screenWidth - 150, y: 200 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BsLink className="w-10 h-10 text-black opacity-50" />
          </motion.div>

          <motion.div
            className="absolute w-24 h-24 bg-pink-300 rounded-full opacity-30 flex items-center justify-center"
            initial={{ x: screenWidth - 250, y: -50 }}
            animate={{ x: screenWidth - 250, y: 300 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BsQrCode className="w-10 h-8 text-white opacity-50" />
          </motion.div> */}
        </>
      )}
    </>
  );
};

export default AnimatedBackgroundTwo;
