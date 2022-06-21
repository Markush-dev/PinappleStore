import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

import Container from '../components/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'

import Logo from "../assets/images/splash.png";

import styles from '../styles/ThankYou.module.css'

const Thanks: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pinapple Storep</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <Container>
          <div className={styles.logo}>
            <Image src={Logo} alt='Thank you' />
          </div>
          <h2>Thanks for your time</h2>
        </Container>
      </main>

      <Footer/>
    </div>
  )
}

export default Thanks
