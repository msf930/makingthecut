
import styles from './Footer.module.css';

import Link from "next/link";
import Image from "next/image";

import logoMd from '@/public/MTCLogoMd.png';

export default function Footer() {
    return (
        <div className={styles.footerCont}>
            <div className={styles.footerBody}>
                <div className={styles.footerLogo}>
                    <Image src={logoMd} alt="logo" width={110} height={110} />
                </div>
                <div className={styles.footerContentCont}>
                    <div className={styles.footerLinksCont}>
                        <Link href="/">
                            <h3>Home</h3>
                        </Link>
                        <Link href="/about">
                            <h3>About</h3>
                        </Link>
                        <Link href="/services">
                            <h3>Services</h3>
                        </Link>
                        <Link href="/contact">
                            <h3>Contact</h3>
                        </Link>
                    </div>
                    <div className={styles.footerContactCont}>
                        <div className={styles.footerContactItem}>
                            <h3>Phone</h3>
                            <a href="tel:+7206638195">720-663-8195</a>
                        </div>
                        <div className={styles.footerContactItem}>
                            <h3>Email</h3>
                            <a href="mailto:eric@makingthecutdenver.com">eric@makingthecutdenver.com</a>
                        </div>
                        <div className={styles.footerContactItem}>
                            <h3>Follow us</h3>
                            <a href="https://www.facebook.com/makingthecutdenver/" target="_blank">
                                <img src="/facebook.svg" alt="facebook" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className={styles.footerSpacerRight}></div>
            </div>
        </div>
    );
}