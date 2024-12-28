import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./MultiLayerParallax.module.css";
import Image from "next/image";

import heroHome from "../../public/homeHeroHouse.png";

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);


    return (
        <div
            ref={ref}
            //className="w-[calc(100% - 200px)] left-[100px] h-screen overflow-hidden relative grid place-items-center"
            className={styles.parallax}
        >
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    // backgroundImage: `url(/homeHeroHouse.png)`,
                    // backgroundPosition: "center",
                    // backgroundSize: "cover",
                    y: backgroundY,
                }}
            >
                <Image src={heroHome} alt="House with lawn" objectFit="cover" fill/>
            </motion.div>

        </div>
    );
}