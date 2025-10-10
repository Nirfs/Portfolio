// components/Loader.jsx
import { motion } from "motion/react";
import '../styles/loader.scss';
import bonhomme from '../assets/character.svg'; // ton image

export function Loader() {
  return (
    <div className="loader_container">
      <motion.img
        src={bonhomme}
        alt="Chargement"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}