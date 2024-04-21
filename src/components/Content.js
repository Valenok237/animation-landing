import React from "react";
import { motion } from 'framer-motion';

const animationTitle = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        x: 150
    }
}

const animationBlock = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        x: 150
    }
}

const Content = () => {
    return(
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.6, once: true}}
            className="content"
        >
            <div className="content__wrapper">
                <motion.h2 variants={animationTitle} className="content__title">CREATIVE TRAVEL</motion.h2>
                <motion.div variants={animationBlock} className="content__text">
                    EXCLUSIVE HOTELS & PRIVATE JETS & YACHT FOR RENT. LUXURY CHALETS & VILLAS
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Content;