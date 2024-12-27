"use client";

import React from "react";

import styles from "./page.module.css";

import { motion, AnimatePresence } from "motion/react";

import Link from "next/link";
import Image from "next/image";

import grass from "@/public/lawnHero.jpg";
import snow from "@/public/homeSnow.jpg";
import house from "@/public/homeHeroHouse.png";
import garden from "@/public/homeGarden2.jpg";

import Nav from "@/app/components/Nav";
import MultiLayerParallax from "@/app/components/MultiLayerParallax";
import GardenParallax from "@/app/components/GardenParallax";
import Process from "@/app/components/Process";
import Footer from "@/app/components/Footer";

export default function Home() {

  return (
      <AnimatePresence>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ease: "easeIn", duration: 1.0}}
              exit={{opacity: 0, transition: {duration: 0.8}}}
              className={styles.page}
          >
              <div className={styles.navCont}>
                  <Nav/>
              </div>
              <div className={styles.heroCont}>
                  <div className={styles.hero}>
                      {/*This is the container for the hero text*/}
                      <motion.div
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{ease: "easeIn", duration: 1.5}}
                          className={styles.heroTextCont}
                      >
                          {/*Hero left*/}
                          <motion.div
                              initial={{x: 100}}
                              animate={{x: 0}}
                              transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <h1 className={styles.titleLeft}>Landscaping <br/> Services</h1>
                          </motion.div>
                          {/*Hero right*/}
                          <motion.div
                              initial={{x: -100}}
                              animate={{x: 0}}
                              transition={{ease: "easeInOut", duration: 1.5}}
                              className={styles.titleRightCont}
                          >
                              <div className={styles.verticalLine}></div>
                              <div className={styles.titleRightItems}>
                                  <h3 className={styles.titleRight}>We are Making The Cut <br/> Landscaping & Lawn Care
                                  </h3>
                                  <div className={styles.titleRightBtnCont}>
                                      <button className={styles.heroBtn}><Link href="/services">Services</Link></button>
                                      <button className={styles.heroBtn}><Link href="/about">Learn More</Link></button>
                                  </div>
                              </div>

                          </motion.div>
                      </motion.div>
                  </div>
                  <MultiLayerParallax/>
              </div>
              <div className={styles.heroContMobile}>
                  <div className={styles.heroMobile}>
                      {/*This is the container for the hero text*/}
                      <motion.div
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{ease: "easeIn", duration: 1.5}}
                          className={styles.heroTextContMobile}
                      >
                          {/*Hero left*/}
                          <motion.div
                              initial={{y: 100}}
                              animate={{y: 0}}
                              transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <h1 className={styles.titleLeftMobile}>Landscaping <br/> Services</h1>
                          </motion.div>
                          <div className={styles.horizontalLineMobile}></div>
                          {/*Hero right*/}
                          <motion.div
                              initial={{y: -100}}
                              animate={{y: 0}}
                              transition={{ease: "easeInOut", duration: 1.5}}
                              className={styles.titleRightContMobile}
                          >
                              <div className={styles.verticalLine}></div>
                              <div className={styles.titleRightItemsMobile}>
                                  <h3 className={styles.titleRightMobile}>We are Making The Cut <br/> Landscaping & Lawn
                                      Care
                                  </h3>
                              </div>

                          </motion.div>
                          <motion.div className={styles.titleRightBtnContMobile}
                                      initial={{y: 100}}
                                      animate={{y: 0}}
                                      transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <button className={styles.heroBtnMobile}><Link href="/services">Services</Link></button>
                              <button className={styles.heroBtnMobile}><Link href="/about">Learn More</Link></button>
                          </motion.div>
                      </motion.div>
                  </div>
                  <div className={styles.heroImg}>
                      <Image src={house} alt={"grass"} objectFit="cover" fill/>
                  </div>
              </div>
              <div className={styles.content}>
                  <motion.div
                      className={styles.contentTextCont}
                      initial={{x: -100, opacity: 0}}
                      whileInView={{x: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 2.0}}
                  >
                      <h3>Our Mission</h3>
                      <p>Our mission at Making the Cut is simple:<b> to provide high-quality services for our valued
                          clients</b></p>
                  </motion.div>
                  <motion.div
                      className={styles.contentGrassCont}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 2.0}}
                  >
                      <div className={styles.grassImg}>
                          <Image src={grass} alt="grass" objectFit="cover" fill/>
                      </div>
                      <motion.div
                          className={styles.imageMotionCTA}
                          initial={{x: -100, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: "easeInOut", duration: 2.0}}
                      >
                          <a href="/services">
                              <div className="flex flex-row gap-3">
                                  <img src="/circArrowRightWhite.png" alt="arrow" width={30} height={30}/>
                                  <p>Lawn Care</p>
                              </div>
                          </a>
                      </motion.div>
                  </motion.div>
                  <div className={styles.contentGardenCont}>
                      <GardenParallax/>
                  </div>
                  <motion.div
                      className={styles.contentSnowCont}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 2.0}}
                  >
                      <div className={styles.snowImg}>
                          <Image src={snow} alt="grass" objectFit="cover" fill/>
                      </div>
                      <motion.div
                          className={styles.imageMotionCTA}
                          initial={{x: -100, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: "easeInOut", duration: 2.0}}
                      >
                          <a href="/services">
                              <div className="flex flex-row gap-3">
                                  <img src="/circArrowRightWhite.png" alt="arrow" width={30} height={30}/>
                                  <p>Winter Services</p>
                              </div>
                          </a>
                      </motion.div>
                  </motion.div>
                  <div className={styles.contentProcessCont}>
                      <Process/>
                  </div>
              </div>
              <div className={styles.contentMobile}>
                  <motion.div
                      className={styles.contentTextContMobile}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 1.5}}
                  >
                      <h3>Our Mission</h3>
                      <p>Our mission at Making the Cut is simple:<b> to provide high-quality services for our valued
                          clients</b></p>
                  </motion.div>
                  <motion.div
                      className={styles.contentGrassContMobile}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 1.5}}
                  >
                      <div className={styles.grassImgMobileCont}>
                          <div className={styles.grassImgMobile}>
                              <Image src={grass} alt="grass" objectFit="cover" fill/>
                      <motion.div
                          className={styles.imageMotionCTAMobile}
                          initial={{x: -100, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: "easeInOut", duration: 1.5}}
                      >
                          <a href="/services">
                              <div className="flex flex-row gap-3">
                                  <Image src="/circArrowRightWhite.png" alt="arrow" width={24} height={20}/>
                                  <p>Lawn Care</p>
                              </div>
                          </a>
                      </motion.div>
                          </div>
                      </div>
                  </motion.div>
                  <div className={styles.contentGardenContMobile}>
                      <Image src={garden} alt="grass" objectFit="cover" fill/>
                      <motion.div
                          className={styles.imageMotionCTAMobileLand}
                          initial={{x: -100, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: "easeInOut", duration: 1.5}}
                      >
                          <a href="/services">
                              <div className="flex flex-row gap-3">
                                  <Image src="/circArrowRightWhite.png" alt="arrow" width={24} height={20}/>
                                  <p>Landscaping</p>
                              </div>
                          </a>
                      </motion.div>
                  </div>
                  <motion.div
                      className={styles.contentSnowContMobile}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      viewport={{once: true}}
                      transition={{ease: "easeInOut", duration: 2.0}}
                  >
                      <div className={styles.snowImgMobile}>
                          <Image src={snow} alt="grass" objectFit="cover" fill/>
                      <motion.div
                          className={styles.imageMotionCTAMobile}
                          initial={{x: -100, opacity: 0}}
                          whileInView={{x: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: "easeInOut", duration: 2.0}}
                      >
                          <a href="/services">
                              <div className="flex flex-row gap-3">
                                  <img src="/circArrowRightWhite.png" alt="arrow" width={24} height={20}/>
                                  <p>Winter Services</p>
                              </div>
                          </a>
                      </motion.div>
                      </div>
                  </motion.div>
                  <div className={styles.contentProcessContMobile}>
                      <Process/>
                  </div>
              </div>
              <div className={styles.whyCont}>
                  <div className={styles.whyTitleCont}>
                      <h3>Why Choose Us?</h3>
                  </div>
                  <div className={styles.whyItemCont}>
                      <div className={styles.whyItemRow}>
                          <motion.div className={styles.whyItemLong}
                                      initial={{x: -100, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      viewport={{once: true}}
                                      transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <div className={styles.whyItemTitleCont}>
                                  <img src="/freeEstimate.svg" alt="checkmark" width={30} height={30}
                                       className={styles.whyIcon}/>
                                  <h3>Free Estimate</h3>
                              </div>
                              <p>You will receive a full detailed estimate before you decide on anything</p>
                          </motion.div>
                          <motion.div className={styles.whyItemShort}
                                      initial={{x: 100, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      viewport={{once: true}}
                                      transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <div className={styles.whyItemTitleCont}>
                                  <img src="/certified.svg" alt="checkmark" width={30} height={30}
                                       className={styles.whyIcon}/>
                                  <h3>Licensed & Insured</h3>
                              </div>
                              <p>We are covered so that we got you covered</p>
                          </motion.div>

                      </div>
                      <div className={styles.whyItemRow}>
                          <motion.div className={styles.whyItemShort}
                                      initial={{x: -100, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      viewport={{once: true}}
                                      transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <div className={styles.whyItemTitleCont}>
                                  <img src="/upfrontCost.svg" alt="checkmark" width={30} height={30}
                                       className={styles.whyIcon}/>
                                  <h3>Upfront costs</h3>
                              </div>
                              <p>No hidden costs</p>
                          </motion.div>
                          <motion.div className={styles.whyItemLong}
                                      initial={{x: 100, opacity: 0}}
                                      whileInView={{x: 0, opacity: 1}}
                                      viewport={{once: true}}
                                      transition={{ease: "easeInOut", duration: 1.5}}
                          >
                              <div className={styles.whyItemTitleCont}>
                                  <img src="/friendly.svg" alt="checkmark" width={30} height={30}
                                       className={styles.whyIcon}/>
                                  <h3>Friendly Service</h3>
                              </div>
                              <p>From start to finish we guarantee you will be met with a friendly face</p>
                          </motion.div>
                      </div>
                  </div>
                  <div className={styles.whyBottom}></div>
              </div>
              <div className={styles.testimonialsCont}>
                  <div className={styles.testLineTop}></div>
                  <motion.div className={styles.testimonialsTitleCont}
                              initial={{x: -100, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: "easeInOut", duration: 1.5}}
                  >
                      <h3>Testimonials</h3>
                  </motion.div>
                  <div className={styles.testimonialsItemCont}>
                      <motion.div className={styles.testimonialName}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 0.5}}

                      >
                          <h3>Chris T</h3>
                      </motion.div>
                      <motion.div className={styles.testimonialIcon}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.0}}
                      >
                          <img src="/testimonialStar.svg" alt="quote icon" width={30} height={30}
                               className={styles.whyIcon}/>
                      </motion.div>
                      <motion.div className={styles.testimonialQuote}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.5}}

                      >
                          <p>“Fantastic work. I had to reschedule a couple of times due to work issues, and Erik was
                              extremely flexible. The yard looked much better than the previous company&#39;s work, and
                              for a better price.”</p>
                      </motion.div>
                  </div>
                  <div className={styles.testLine}></div>

                  <div className={styles.testimonialsItemCont}>
                      <motion.div className={styles.testimonialName}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 0.5}}

                      >
                          <h3>Collene M</h3>
                      </motion.div>
                      <motion.div className={styles.testimonialIcon}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.0}}

                      >
                          <img src="/testimonialStar.svg" alt="quote icon" width={30} height={30}
                               className={styles.whyIcon}/>
                      </motion.div>
                      <motion.div className={styles.testimonialQuote}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.5}}

                      >
                          <p>“Eric saved us after the last snow storm. At the last minute and as a new client,
                              he dug us out the same day we called and followed up the next day too when a second
                              storm came through. Eric is personable, did a great job and we look forward to working
                              with him in the future!”</p>
                      </motion.div>
                  </div>
                  <div className={styles.testLine}></div>

                  <div className={styles.testimonialsItemCont}>
                      <motion.div className={styles.testimonialName}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 0.5}}

                      >
                          <h3>Bradley Q</h3>
                      </motion.div>
                      <motion.div className={styles.testimonialIcon}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.0}}

                      >
                          <img src="/testimonialStar.svg" alt="quote icon" width={30} height={30}
                               className={styles.whyIcon}/>
                      </motion.div>
                      <motion.div className={styles.testimonialQuote}
                                  initial={{y: 50, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: "easeInOut", duration: 1.5}}

                      >
                          <p>“We needed to fix the grading around the house, and Eric got the job done.
                              It was a pleasure to work with him, and he was very honest and easy to work with.
                              We had several ideas and he helped guide us with the one best fitting our needs.”</p>
                      </motion.div>
                  </div>
                  <div className={styles.testLine}></div>
              </div>
              <Footer/>
          </motion.div>
      </AnimatePresence>


  );
}
