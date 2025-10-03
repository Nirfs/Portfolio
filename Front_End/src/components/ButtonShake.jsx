import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
//style
import '../styles/buttonShake.scss'
export function ButtonShake({bool, text}){

    let isBig = {bool}
    
    return(
        <motion.div className={bool ? "big_button_shake" : 'button_shake'}
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
            <NavLink to='/'>{text}</NavLink>
        </motion.div>
    )
}