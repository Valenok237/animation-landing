import React from "react";
import { motion } from 'framer-motion';
import scroll from '../img/scroll.png';

const animationTitle = {
    visible: {
        opacity: 1,
        fontSize: '50px',
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        fontSize: '70px'
    }
}

const animationBlock = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0
    }
}

const Offer = () => {
    return(
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.6, once: true}}
            className="offer"
        >
            <div className="offer__wrapper">
                <motion.h2 variants={animationTitle} className="offer__title">WHAT WE OFFER YOU</motion.h2>
                <motion.div variants={animationBlock} className="scroll-indicator">
                    <img src={scroll} alt="Scroll down" className="scroll-indicator__img" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Offer;