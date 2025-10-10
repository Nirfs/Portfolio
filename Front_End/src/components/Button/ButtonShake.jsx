// Librairies
import { motion } from "framer-motion";
// Styles
import "../../styles/buttonShake.scss";

export function ButtonShake({ text = "Cliquez", onClick, ariaLabel }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="btn-shake"
      aria-label={ariaLabel ?? text}
      animate={{
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.button>
  );
}
