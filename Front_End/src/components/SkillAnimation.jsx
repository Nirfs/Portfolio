//composant
import { SkillCard } from "./SkillsCard"
import {motion, useScroll, useTransform} from 'motion/react'

//assets
import reactLogo from '../assets/react_logo.svg'
import htmlLogo from '../assets/html_logo.svg'
import cssLogo from '../assets/css_logo.svg'
import front_end from '../assets/front_end.svg'
//styles
import '../styles/skillAnimation.scss'

export function SkillAnimation(){
    const {scrollYProgress} = useScroll()

    const y1 = useTransform(scrollYProgress, [.4, 0], [0, 200])
    const y2 = useTransform(scrollYProgress, [.4, 0], [0, 300])
    const y3 = useTransform(scrollYProgress, [.4, 0], [0, 100])
    const x1 = useTransform(scrollYProgress, [.4, 0], [0, -200])
    const x2 = useTransform(scrollYProgress, [.4, 0], [0, 300])
    const x3 = useTransform(scrollYProgress, [.4, 0], [0, 100])
    return(
        <>
            <motion.div 
                className="skill_header"
                    style={{
                        y: y1,
                    }}
                >
                <h2>COMPÉTENCES</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio officiis reiciendis deserunt libero, mollitia saepe ex temporibus incidunt at vitae. Modi rem neque eius saepe doloribus unde in quidem consequuntur!</p>
            </motion.div>
            <div className="skill_card_container">
                <motion.div
                    style={{
                        y: y1,
                        x:x1,
                    }}
                >
                    <SkillCard
                        className='front_end'
                        title='FRONT END'
                        text= 'blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla '
                        sources={[
                            { src: reactLogo, alt: "logo react" },
                            { src: htmlLogo, alt: "html node" },
                            { src: cssLogo, alt: "logo css" },
                        ]}
                        image_src={front_end}
                    />
                </motion.div>
                <motion.div
                    style={{
                        y: y2,
                    }}
                >
                    <SkillCard
                        className='back_end'
                        title='BACK END'
                        text= 'blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla '
                        sources={[
                            { src: reactLogo, alt: "logo react" },
                            { src: htmlLogo, alt: "html node" },
                            { src: cssLogo, alt: "logo css" },
                        ]}
                        image_src={front_end}
                    />
                </motion.div>
                <motion.div
                    style={{
                        y: y3,
                        x: x3
                    }}
                >
                    <SkillCard
                        className='design'
                        title='DESIGN GRAPHIQUE'
                        text= 'blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla '
                        sources={[
                            { src: reactLogo, alt: "logo react" },
                            { src: htmlLogo, alt: "html node" },
                            { src: cssLogo, alt: "logo css" },
                        ]}
                        image_src={front_end}
                    />
                </motion.div>
            </div>
        </>
    )
}