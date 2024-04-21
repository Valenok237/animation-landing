import React from "react";
import { motion } from 'framer-motion';

const animationTitle = {
    visible: {
        opacity: 1,
        fontSize: '70px',
        transition: {
            duration: 0.5
        }
    },
    hidden: {
        opacity: 0,
        fontSize: '90px'
    }
}

const animationBlock = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const Preview = () => {
    return ( 
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.6, once: true}}
            className="preview"
        >
            <div className="preview__wrapper">
                <motion.h1 variants={animationTitle} className="preview__title">First class</motion.h1>
                <motion.div className="preview__text" variants={animationBlock}>This is where your best vacation begins</motion.div>
            </div>
        </motion.section>
    );
}

export default Preview;