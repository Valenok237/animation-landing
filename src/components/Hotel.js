import React from "react";
import { motion } from 'framer-motion';
import {MLogo} from "./Logo";
import ritz from '../img/logo-ritz.png';
import cheval from '../img/cheval-blanc-logo.png';
import airelles from '../img/logo-airelles.png';
import soneva from '../img/logo-soneva.png';
import velaa from '../img/logo-velaa.png';
import mandarin from '../img/mandarin-logo.png';
import only from '../img/only-logo.png';
import six from '../img/six-senses-logo.png';


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
        x: -150
    }
}

const featureAnimation = {
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.2
        }
    }),
    hidden: {
        opacity: 0
    }
}

const Hotel = () => {
    const logos = [ritz, cheval, airelles, soneva, velaa, mandarin, only, six];

    return(
        <motion.section 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.5, once: true}}
            className="hotels"
        >
            <div className="hotels__wrapper">
                <motion.h2 variants={animationTitle} className="hotels__title">BEST HOTELS</motion.h2>
                <motion.div variants={animationBlock} className="hotels__text">
                    EXCLUSIVE OFFERS AROUND THE WORLD &amp; BEST HOTELS IN OVER 80 COUNTRIES.
                </motion.div>
                <div className="hotels-logos">
                    {logos.map((item, index) => (
                        <MLogo key={item} pic={item} variants={featureAnimation} custom={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Hotel;