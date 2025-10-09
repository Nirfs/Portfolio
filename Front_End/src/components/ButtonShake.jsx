import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
//style
import '../styles/buttonShake.scss'
export function ButtonShake({text, onClick}){

    return(
        <motion.button 
            type="button"
            onClick={onClick}
            className='button_shake'
            animate={{
                rotate:[0,-5,5,-5,0]
            }}
            whileHover={{
            scale:1.05,
            transition:{duration: 0.2}
            }}
            transition={{
                duration:0.6,
                ease:"easeInOut",
                repeat:Infinity,
                repeatDelay:"3"
            }}
        >
        {text}
        </motion.button>
    )
}