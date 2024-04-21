import React from "react";
import { motion } from 'framer-motion';
import { forwardRef } from "react";

const Logo = forwardRef(({pic}, ref) => {
    return ( 
        <div ref={ref} className="hotels-logos__item">
            <a href="#!" className="hotels-logos__link">
                <img src={pic} alt="Логотип Amelia" className="hotels-logos__pic"/>
            </a>
        </div>
    );
})
 
export const MLogo = motion(Logo);