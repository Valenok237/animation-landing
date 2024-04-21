import React from "react";
import { motion } from 'framer-motion';

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

const Booking = () => {
    return ( 
        <motion.section 
            className="booking"
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.5, once: true}}
        >
            <motion.h2 className="booking__title" variants={animationTitle}>LET’S PLAN YOUR NEXT TRIP TOGETHER</motion.h2>
            <motion.form className="booking-form" variants={animationBlock}>
                <input className="booking-form__input" type="text" placeholder="Your name" />
                <input className="booking-form__input" type="text" placeholder="Your surname" />
                <input className="booking-form__input" type="text" placeholder="Contact number" />
                <input className="booking-form__input" type="text" placeholder="Email address" />
                <input className="booking-form__input" type="text" placeholder="Destination(s)" />
                <input className="booking-form__input" type="text" placeholder="Preferred travel dates" />
                <input className="booking-form__input" type="text" placeholder="Number of travelers" />
                <input className="booking-form__input" type="text" placeholder="Accommodation type" />
                <input className="booking-form__input booking-form__input_require" type="text" placeholder="Will you require yacht rental, private jet charter, or any other luxury travel services?" />
                <button className="booking-form__button">Submit</button>
            </motion.form>
        </motion.section>
    );
}
 
export default Booking;