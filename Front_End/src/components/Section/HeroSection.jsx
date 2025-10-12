// Librairies
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

// Assets
import portrait from '../../assets/characterAnime.svg';

// Composants
import { ContactModal } from "./ContactModal";

// Styles
import '../../styles/heroSection.scss';

export function HeroSection() {
  const containerControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    async function runSequence() {
      await containerControls.start({ x: 0, opacity: 1 });
      await Promise.all([
        imageControls.start({ y: 0 }),
        textControls.start({ x: 0, opacity: 1 }),
        buttonControls.start({ y: 0, opacity: 1 })
      ]);
    }
    runSequence();
  }, []);

  return (
    <>
      <motion.section
        className="hero-section"
        initial={{ x: -250, opacity: 0 }}
        animate={containerControls}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="hero-section__text">
          <motion.h1
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            KEVIN PIEPLU
          </motion.h1>

          <motion.h2
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Développeur front-end
          </motion.h2>

          <motion.p
            initial={{ x: -250, opacity: 0 }}
            animate={textControls}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Hello ! Je m’appelle Kevin Pieplu, designer graphique et développeur web junior.
            Passionné d’informatique depuis toujours, je suis curieux, créatif et autonome.
            J’aime explorer de nouvelles idées, trouver des solutions élégantes à des problèmes complexes
            et donner vie à des projets à travers le design et le code.
            Mon objectif : allier esthétique et efficacité pour créer des expériences uniques.
          </motion.p>
        </div>

            <object 
                className="hero_section__portrait"
                data={portrait} 
                type="image/svg+xml"
                style={{width: 'clamp(250px, 30vw, 550px)'}}
           ></object>
      </motion.section>

      <ContactModal />
    </>
  );
}
