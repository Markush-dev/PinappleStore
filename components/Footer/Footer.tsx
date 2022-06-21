import React from 'react';
import Link from 'next/dist/client/link';
import Image from 'next/image';

import Container from '../Container';

import Logo from "../../assets/images/top_logo.png";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <p className={styles.title}>This is the best footer</p>
                <div className={styles.backBox}>
                    <span>Come back</span>
                    <Link href='/'>
                        <a className={styles.logo}>
                            <Image src={Logo} alt='Pinapple Store' />
                        </a>
                    </Link>
                </div>
            </Container>
      </footer>
    )
};

export default Footer;