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

const Apartments = () => {
    return ( 
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.6, once: true}}
            className="apartments"
        >
            <div className="apartments__wrapper">
                <motion.h2 variants={animationTitle} className="apartments__title">CHALET, VILLA, UNIQUE CASTLE</motion.h2>
                <motion.div variants={animationBlock} className="apartments__text">
                    ULTIMATE BEACH FRONT RESIDENCE & LUXURY SKI CHALET. UNIQUE CASTLE & VILLAS
                </motion.div>
            </div>
        </motion.section>
    );
}
 
export default Apartments;