import Link from 'next/dist/client/link';
import Image from 'next/image';

import HeroLogo from "../../assets/images/splash.png";

import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Pinapple Store</h2>
            <p className={styles.phrase}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className={styles.logo}>
                <Image src={HeroLogo} alt='Give thanks' />
            </div>
            <Link href='/thanks'>
                <a>
                    <button className={styles.button}>Give thanks</button>
                </a>
            </Link>
        </div>
    )
}

export default Hero