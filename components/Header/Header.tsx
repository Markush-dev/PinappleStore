import Link from 'next/dist/client/link';
import Image from 'next/image';

import Container from '../Container';

import Logo from "../../assets/images/top_logo.png";

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav>
                    <Link href='/'>
                        <a className={styles.logo}>
                            <Image src={Logo} alt='Pinapple Store' />
                        </a>
                    </Link>
                </nav>
            </Container>
        </header>
    )
}

export default Header