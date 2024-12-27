import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./GardenParallax.module.css";



export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);


    return (
        <div
            ref={ref}
            //className="w-[calc(100% - 200px)] left-[100px] h-screen overflow-hidden relative grid place-items-center"
            className={styles.parallax}

        >
            <motion.div

                // className="absolute inset-0 z-10"
                className={styles.parallaxImg}
                style={{
                    backgroundImage: `url(/homeGarden2.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "fill",
                    y: backgroundY,
                }}
            >
            </motion.div>
            <motion.div
                className={styles.imageMotionCTA}
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ease: "easeInOut", duration: 2.0}}

            >
                <a href="/services">
                    <div className="flex flex-row gap-3">
                        <img src="/circArrowRightWhite.png" alt="arrow" width={30} height={30} />
                        <p>Landscaping</p>
                    </div>
                </a>
            </motion.div>

        </div>
    );
}