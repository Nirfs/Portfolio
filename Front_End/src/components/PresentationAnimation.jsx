//composant
import { motion, useAnimation, useInView } from "motion/react"
import { ButtonShake } from './ButtonShake'
//assets
import portrait from '../assets/character.svg'
//styles
import '../styles/presentationAnimation.scss'
import { useEffect } from "react";


export function PresentationAnimation(){

    const controlContainer = useAnimation();
    const controlImage = useAnimation();
    const controlTitle = useAnimation();
    const controlButton = useAnimation();

    useEffect(() => {
        async function runSequence(){
            await controlContainer.start({
                x:0,
                opacity:1
            })
            await Promise.all([
                controlImage.start({
                    y:0
                }),
                controlTitle.start({
                    x:0,
                    opacity:1
                }),
                controlButton.start({
                    y:0,
                    opacity:1
                })
            ])
        }
        runSequence()
    })

    return(
        <>
            <motion.div 
                initial={{
                    x:-250,
                    opacity:0
                }}
                animate={controlContainer}
                transition={{
                    duration: 0.4, 
                    ease: "easeOut"
                }}
            className='présentation_container'>    
                        <div className="text_containe">
                            <motion.h1
                                initial={{
                                    x:-250,
                                    opacity:0
                                }}
                                animate={controlTitle}
                                transition={{
                                    duration: 0.6, 
                                    ease: "easeInOut"
                                }}
                            >
                                KEVIN PIEPLU
                            </motion.h1>

                            <motion.h2
                                initial={{
                                    x:-250,
                                    opacity:0
                                }}
                                animate={controlTitle}
                                transition={{
                                    duration: 0.5, 
                                    ease: "easeInOut"
                                }}
                            >
                                Développeur front-end
                            </motion.h2>
                            <motion.p
                            initial={{
                                    x:-250,
                                    opacity:0
                                }}
                                animate={controlTitle}
                                transition={{
                                    duration: 0.4, 
                                    ease: "easeInOut"
                                }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Rem dolorem nobis laudantium! Quos suscipit itaque consequuntur molestias, 
                                nemo ipsam vitae hic, ea similique eaque, eius aspernatur explicabo debitis 
                                facilis repellendus?
                            </motion.p>
                        </div>
                        <motion.img 
                            src={portrait} 
                            alt='autoportrait dessiné'
                            initial={{y: 600}}
                            animate={controlImage}
                            transition={{
                                duration: 0.4, 
                                ease: "easeIn"
                            }}
                        />
            </motion.div>
            <motion.div
                initial={{y: 50, opacity:0}}
                animate={controlButton}
                transition={{
                    duration: 0.3, 
                    ease: "easeIn"
                }}>
                <ButtonShake bool={true} text="contact"/>
            </motion.div>
        </>
    )
}