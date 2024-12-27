"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import styles from "./contact.module.css";
import Image from "next/image";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function Contact() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const getWordCount = () => {
        return message.length;
    };
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
                        <h3>Contact Us</h3>
                        <h1>Let's Discuss<br/> Your Next Project</h1>
                    </div>
                </div>
                <div className={styles.contentCont}>
                    <div className={styles.formCont}>
                        <h3>Fill out the form, or contact us to set up your free estimate.</h3>
                        <div className={styles.inputCont}>
                            <form action="https://public.herotofu.com/v1/63b4aba0-c1de-11ef-a994-f54411fd88d5"
                                  method="post" acceptCharset="UTF-8">
                                <div className={styles.textInputRow}>
                                    <div className={styles.textInputItem}>
                                        <label htmlFor="firstName">First name *</label>
                                        <input name="FirstName" id="firstName" type="text" required/>
                                    </div>
                                    <div className={styles.textInputItem}>
                                        <label htmlFor="email">Last name *</label>
                                        <input name="LastName" id="lastName" type="text" required/>
                                    </div>
                                </div>
                                <div className={styles.textInputRow}>
                                    <div className={styles.textInputItem}>
                                        <label htmlFor="phone">Phone *</label>
                                        <input name="Phone" id="phone" type="tel" required/>
                                    </div>
                                    <div className={styles.textInputItem}>
                                        <label htmlFor="email">Email *</label>
                                        <input name="Email" id="email" type="email" required/>
                                    </div>
                                </div>
                                <div className={styles.textInputRow}>
                                    <div className={styles.textInputItemAddress}>
                                        <label htmlFor="address">Address</label>
                                        <input name="Address1" id="address" type="text" autoComplete="address-line1" placeholder="Address"/>
                                        <input name="Address2" id="address" type="text" autoComplete="address-line2" placeholder="Address 2"/>
                                        <div className={styles.addressGrid}>
                                            <input name="City" id="address" type="text" autoComplete="address-level2" placeholder="City"/>
                                            <input name="State" id="address" type="text" autoComplete="address-level1" placeholder="State"/>
                                            <input name="Zip" id="address" type="text" autoComplete="postal-code" placeholder="Zip Code"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceInputCont}>
                                    <label className={styles.serviceInputHeader} htmlFor="service">Service *</label>
                                    <div className={styles.servicesGrid}>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service1" name="service1" value="Aeration"/>
                                            <label htmlFor="service1"> Aeration</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service2" name="service2"
                                                   value="Total Lawn Care"/>
                                            <label htmlFor="service2"> Total Lawn Care</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service3" name="service3"
                                                   value="Tree & Bush Trimming"/>
                                            <label htmlFor="service3"> Tree & Bush Trimming</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service4" name="service4"
                                                   value="Garden maintenance"/>
                                            <label htmlFor="service4"> Garden maintenance</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service5" name="service5" value="Weed removal"/>
                                            <label htmlFor="service5"> Weed removal</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service6" name="service6" value="Gutter Clean"/>
                                            <label htmlFor="service6"> Gutter Clean</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service7" name="service7"
                                                   value="Sod Installation"/>
                                            <label htmlFor="service7"> Sod Installation</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service8" name="service8" value="Fall Clean Up"/>
                                            <label htmlFor="service8"> Fall Clean Up</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="checkbox" id="service9" name="service9"
                                                   value="Shoveling Snow"/>
                                            <label htmlFor="service9"> Shoveling Snow</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceInputCont}>
                                    <label className={styles.serviceInputHeader} htmlFor="service">Service Type
                                        *</label>
                                    <div className={styles.serviceTypeGrid}>
                                        <div className={styles.servicesGridItem}>
                                            <input type="radio" id="serviceType1" name="serviceType"
                                                   value="Residential"/>
                                            <label htmlFor="serviceType1"> Residential</label>
                                        </div>
                                        <div className={styles.servicesGridItem}>
                                            <input type="radio" id="serviceType2" name="serviceType"
                                                   value="Commercial"/>
                                            <label htmlFor="serviceType2"> Commercial</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.textInputRow}>
                                    <div className={styles.textInputItemMessage}>
                                        <label htmlFor="message">Type your message here...</label>
                                        <textarea maxLength="350" name="Message" id="message" rows="6" value={message}
                                                  onChange={handleMessageChange}/>
                                        <div className={styles.counterCont}>
                                            <p>{getWordCount()} / 350</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.submitBtnCont}>
                                    <input type="submit" value="Submit" className={styles.submitBtn}/>
                                </div>
                                <div>
                                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className={styles.gotchaInput}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.infoCont}>
                        <h3>Service Area:<br/>Denver Metropolitan area</h3>
                        <h3>eric@makingthecutdenver.com</h3>
                        <h3>720-663-8195</h3>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        </AnimatePresence>
    );
}