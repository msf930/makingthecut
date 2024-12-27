"use client";

import { motion, AnimatePresence } from "motion/react";

import styles from "./services.module.css";
import Image from "next/image";

import React from "react";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function Services() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 1.2}}
                exit={{opacity: 0, transition: {duration: 0.8}}}
                className={styles.page}
            >
                <Nav/>
                <div className={styles.heroCont}>
                    <div className={styles.heroTextCont}>
                        <h3>Services</h3>
                        <h1>Let Us Help You Make Your<br/> Dreams A Reality</h1>
                    </div>
                </div>
                <div className={styles.serviceCont}>
                    <div className={styles.serviceTextCont}>
                        <h3>Our Services</h3>
                    </div>
                    <div className={styles.serviceItemRow}>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2}}
                            >

                                <img src="/aerationIcon.png" alt="holes"/>
                            </motion.div>
                            <h4>Aeration</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.0}}
                            >

                                <p>
                                    Lawn aeration improves grass health by perforating the soil to enhance air,
                                    water, and nutrient flow to the roots. It reduces soil compaction, promotes
                                    deeper root growth, and boosts lawn resilience. Perfect for high-traffic or
                                    compacted areas, aeration ensures a lush, vibrant lawn.
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <img src="/lawnCare2.png" alt="lawn mower"/>
                            </motion.div>
                            <h4>Total Lawn Care
                            </h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <p>
                                    Total lawn care provides comprehensive services to keep your lawn healthy
                                    and beautiful year-round. It includes mowing, fertilizing, weed control,
                                    aeration, and more to ensure lush, vibrant grass. This all-in-one approach
                                    saves time and delivers a well-maintained, thriving lawn.
                                    <br/><br/>
                                    Starting at $35
                                </p>

                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.servicesLine}></div>
                    <div className={styles.serviceItemRow}>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2}}
                            >

                                <img src="/tree.png" alt="tree"/>
                            </motion.div>
                            <h4>Tree & Bush Trimming</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.0}}
                            >

                                <p>
                                    Tree and brush trimming enhances the health, safety, and appearance
                                    of your landscape. It involves removing overgrown branches, shaping trees,
                                    and clearing brush to promote growth and prevent hazards. Regular trimming
                                    keeps your property neat, safe, and thriving.
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <img src="/garden.png" alt="hand with plant"/>
                            </motion.div>
                            <h4>Garden Maintenance
                            </h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <p>
                                    Garden maintenance keeps your garden healthy, tidy, and visually appealing.
                                    Services include weeding, pruning, mulching, and planting to ensure optimal
                                    growth.
                                    Regular care enhances the beauty and functionality of your outdoor space.
                                </p>

                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.servicesLine}></div>
                    <div className={styles.serviceItemRow}>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2}}
                            >

                                <img src="/weedRemoval2.png" alt="tree"/>
                            </motion.div>
                            <h4>Weed Removal</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.0}}
                            >

                                <p>
                                    Removing weeds keeps your lawn and garden healthy by eliminating competition
                                    for nutrients, sunlight, and water. This process improves the appearance of
                                    your outdoor space and supports the growth of desired plants. Regular weed
                                    removal ensures a neat and well-maintained landscape.
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <img src="/gutter.png" alt="hand with plant"/>
                            </motion.div>
                            <h4>Gutter Clean</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <p>
                                    Proper gutter maintenance ensures smooth water flow and prevents damage to
                                    your home’s foundation. It involves removing leaves, debris, and dirt to avoid
                                    clogs and potential water issues. Regular cleaning keeps your gutters in top
                                    condition and protects your property.
                                </p>

                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.servicesLine}></div>
                    <div className={styles.serviceItemRow}>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2}}
                            >

                                <img src="/sod.png" alt="tree"/>
                            </motion.div>
                            <h4>Sod Installation</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.0}}
                            >

                                <p>
                                    Installing sod quickly transforms your lawn with fresh, healthy grass.
                                    It provides an instant green cover, improving your yard's appearance and
                                    preventing soil erosion. Professional installation ensures even coverage
                                    and a lush, vibrant lawn.
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <img src="/fallCleanUp.png" alt="hand with plant"/>
                            </motion.div>
                            <h4>Fall Clean Up</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.4}}
                            >

                                <p>
                                    Fall clean-up prepares your yard for the colder months by removing leaves,
                                    debris, and dead plants. This process helps prevent mold and ensures your
                                    lawn and garden stay healthy through winter. Regular clean-up keeps your
                                    outdoor space neat and ready for spring.
                                </p>

                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.servicesLine}></div>
                    <div className={styles.serviceItemRow}>
                        <div className={styles.serviceItem}>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2}}
                            >

                                <img src="/snowShovel.png" alt="tree"/>
                            </motion.div>
                            <h4>Shoveling Snow</h4>
                            <motion.div

                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeInOut", duration: 1.2, delay: 0.0}}
                            >

                                <p>
                                    Snow shoveling clears walkways, driveways, and steps to ensure safe
                                    access during winter storms. It prevents ice buildup and reduces the
                                    risk of slips and falls. Regular shoveling keeps your property safe
                                    and accessible throughout the season.
                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.serviceCTACont}>
                            <div className={styles.serviceCTAText}>
                                <h3>Create The Yard You <br/> Deserve!</h3>

                                <button className={styles.heroBtn}>
                                    <a href="/contact">
                                        Get A Free Estimate
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}