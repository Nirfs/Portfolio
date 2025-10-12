// Librairies
import { motion, useScroll, useTransform } from "motion/react"

// Composants
import { SkillCard } from "../Card/SkillsCard"

// Assets
import front_end from "../../assets/front_end.svg"
import back_end from "../../assets/back_end.svg"
import design from "../../assets/design.svg"

// Styles
import "../../styles/skillsSection.scss"

/**
 * Section présentant les compétences sous forme de cartes animées
 * qui se déplacent en fonction du scroll.
 *
 * @component
 * @returns {JSX.Element} Composant SkillsSection.
 */

export function SkillsSection() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0.1, 0], [0, 200])
  const y2 = useTransform(scrollYProgress, [0.2, 0], [0, 300])
  const y3 = useTransform(scrollYProgress, [0.3, 0], [0, 100])
  const x1 = useTransform(scrollYProgress, [0.2, 0], [0, -200])
  const x2 = useTransform(scrollYProgress, [0.3, 0], [0, 300])
  const x3 = useTransform(scrollYProgress, [0.2, 0], [0, 100])

  return (
    <>
      <motion.div
        className="skill_header"
        style={{
          y: y1,
        }}
      ></motion.div>

      <div className="skill_card_container">
        <motion.article style={{ y: y1, x: x1 }}>
          <SkillCard
            className="front_end"
            title="FRONT END"
            text="Grâce à ma formation OpenClassrooms en développement web, j’ai acquis des compétences dans les principaux langages et outils du front-end."
            sources={[
              { src: "https://www.svgrepo.com/show/354259/react.svg", alt: "logo react" },
              { src: "https://www.svgrepo.com/show/452228/html-5.svg", alt: "logo html" },
              { src: "https://www.svgrepo.com/show/452185/css-3.svg", alt: "logo css" },
              { src: "https://www.svgrepo.com/show/452045/js.svg", alt: "logo javascript" },
            ]}
            image_src={front_end}
            alt="picto front end"
          />
        </motion.article>

        <motion.article style={{ y: y2 }}>
          <SkillCard
            className="back_end"
            title="BACK END"
            text="J'ai également développé des compétences en back-end, notamment avec Node.js, Express et MongoDB, pour concevoir des applications web complètes."
            sources={[
              { src: "https://www.svgrepo.com/show/452075/node-js.svg", alt: "logo node" },
              { src: "https://www.svgrepo.com/show/331488/mongodb.svg", alt: "logo mongoDb" },
            ]}
            image_src={back_end}
            alt="picto back end"
          />
        </motion.article>

        <motion.article style={{ y: y3, x: x3 }}>
          <SkillCard
            className="design"
            title="DESIGN GRAPHIQUE"
            text="Fort d’un BTS en design graphique et de plusieurs années d’expérience créative, j’apporte une sensibilité artistique que je mets aujourd’hui au service du développement web."
            sources={[
              { src: "https://www.svgrepo.com/show/184132/adobe-photoshop.svg", alt: "logo photoshop" },
              { src: "https://www.svgrepo.com/show/303184/adobe-illustrator-cc-logo.svg", alt: "logo illustrator" },
              { src: "https://www.svgrepo.com/show/303190/after-effects-cc-logo.svg", alt: "logo after effect" },
            ]}
            image_src={design}
            alt="picto design"
          />
        </motion.article>
      </div>
    </>
  )
}
