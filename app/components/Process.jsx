
import { motion, useScroll, useTransform } from "motion/react";


import styles from "./Process.module.css";
import React from "react";
import Link from "next/link";
export default function Process() {
    return(
        <div>
            <div className={styles.processCont}>
                <motion.div
                    className={styles.processTitleCont}
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeInOut", duration: 1.5}}
                >
                    <h1>Our Process</h1>
                    <h3>
                        From start to finish we guarantee we will go above and beyond
                        to cater to each project’s specific needs
                    </h3>
                </motion.div>

                <div className={styles.processItem}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>01</h1>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <div className={styles.verticalLine}></div>
                    </motion.div>
                    <div className={styles.processItemTextCont}>
                        <h3>Initial Contact</h3>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                        >

                            <p>
                                Contact us through one of our many convenient options.
                                We will gather your information and schedule an estimate.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItem}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>02</h1>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <div className={styles.verticalLine}></div>
                    </motion.div>
                    <div className={styles.processItemTextCont}>
                        <h3>Walk the Property</h3>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                        >

                            <p>
                                Walking the property we can decide what work you would like done and start a write up of the possible project.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItem}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>03</h1>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <div className={styles.verticalLine}></div>
                    </motion.div>
                    <div className={styles.processItemTextCont}>
                        <h3>Landscape or Lawn Care Estimate</h3>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                        >

                            <p>
                                A written estimate will be promptly sent to you to conveniently review on your phone or computer.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItem}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>04</h1>
                    </motion.div>
                    <motion.div
                        initial={{y: 100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <div className={styles.verticalLine}></div>
                    </motion.div>
                    <div className={styles.processItemTextCont}>
                        <h3>Final Walk Through</h3>
                        <motion.div
                            initial={{y: 100, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                        >

                            <p>
                                Making the Cut is dedicated to exceed your
                                expectations and make sure you are you happy with your experience and that the work is done right.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processBtnCont}>
                    <Link href="/services">
                        <button className={styles.processBtn}>View Services</button>
                    </Link>
                </div>
            </div>
            <div className={styles.processContMobile}>
                <motion.div
                    className={styles.processTitleCont}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeInOut", duration: 1.5}}
                >
                    <h1>Our Process</h1>
                    <h3>
                        From start to finish we guarantee we will go above and beyond
                        to cater to each project’s specific needs
                    </h3>
                </motion.div>

                <div className={styles.processItemMobile}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>01</h1>
                    </motion.div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.processItemTextContMobile}>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <h3>Initial Contact</h3>

                        </motion.div>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <p>
                                Contact us through one of our many convenient options.
                                We will gather your information and schedule an estimate.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItemMobile}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>02</h1>
                    </motion.div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.processItemTextContMobile}>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <h3>Walk the Property</h3>

                        </motion.div>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <p>
                                Walking the property we can decide what work you would like done and start a write up of
                                the possible project.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItemMobile}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>03</h1>
                    </motion.div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.processItemTextContMobile}>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <h3>Landscape or Lawn Care Estimate</h3>

                        </motion.div>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <p>
                                A written estimate will be promptly sent to you to conveniently review on your phone or
                                computer.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.processItemMobile}>
                    <motion.div
                        className={styles.processItemNumCont}
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeInOut", duration: 1.5}}
                    >
                        <h1>04</h1>
                    </motion.div>
                    <div className={styles.verticalLine}></div>
                    <div className={styles.processItemTextContMobile}>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <h3>Final Walk Through</h3>

                        </motion.div>
                        <motion.div
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeInOut", duration: 1.5}}
                            className={styles.processItemTextCont}
                        >
                            <p>
                                Making the Cut is dedicated to exceed your
                                expectations and make sure you are you happy with your experience and that the work is
                                done right.
                            </p>
                        </motion.div>
                    </div>
                </div>


                <div className={styles.processBtnCont}>
                    <Link href="/services">
                        <button className={styles.processBtn}>View Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}