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
        x: -150
    }
}

const featureAnimation = {
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.5
        }
    }),
    hidden: {
        opacity: 0
    }
}

const Transports = () => {
    const names = ['YACHT FOR RENT', 'CRUISE', 'FLY TICKETS'];

    return ( 
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.5, once: true}}
            className="transports"
        >
            <motion.h2 variants={animationTitle} className="transports__title">LUXURY TRAVEL SERVICES OF YOUR CHOISE</motion.h2>
            <div className="transports__wrapper">
                {names.map((name, index) => (
                    <motion.div 
                        key={name} 
                        variants={featureAnimation}
                        custom={index}
                        className="transports__item"
                    >
                        <div className="transports__name">{name}</div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
 
export default Transports;