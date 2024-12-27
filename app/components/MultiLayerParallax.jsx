import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./paralax.module.css";

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return (
        <div
            ref={ref}
            // className="w-full h-screen overflow-hidden relative grid place-items-center"
            className={styles.paralax}
        >


            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/homeHero.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />

        </div>
    );
}