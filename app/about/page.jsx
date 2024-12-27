"use client";

import { motion, AnimatePresence } from "motion/react";

import styles from "./about.module.css";
import Image from "next/image";
import house1 from "@/public/aboutImg1.jpg";
import house2 from "@/public/aboutImg2.jpg";
import React from "react";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function About() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 1.0}}
                exit={{ opacity: 0, transition: {duration: 0.8} }}
                className={styles.page}
            >
                <Nav/>
                <div className={styles.heroCont}>
                    <div className={styles.heroTextCont}>
                        <h3>About</h3>
                        <h1>Making The Cut<br/> Landscaping & Lawn Care</h1>
                    </div>
                </div>
                <div className={styles.missionCont}>
                    <div className={styles.missionTextCont}>
                        <h3>Our Mission</h3>
                        <p>
                            Our mission at Making the Cut is simple:
                            <b> to provide high-quality services for our valued clients.</b>
                        </p>
                    </div>
                    <motion.div
                        className={styles.contentGrassCont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 2.0}}
                    >
                        <div className={styles.grassImg}>

                            <Image src={house1} alt="grass" objectFit="cover" fill/>
                        </div>

                    </motion.div>
                </div>
                <div className={styles.teamCont}>

                    <motion.div
                        className={styles.contentHouse2Cont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 2.0}}
                    >
                        <div className={styles.house2Img}>

                            <Image src={house2} alt="grass" objectFit="cover" />
                        </div>

                    </motion.div>
                    <div className={styles.teamTextCont}>
                        <h3>Our Team</h3>
                        <p>
                            Our team goes above and beyond to cater to each project’s specific needs.
                            Through open communication and exceptional service, we hope you’ll find what
                            you’re looking for with our landscape and lawn care company. For more information
                            or general inquiries, get in touch today.
                        </p>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}