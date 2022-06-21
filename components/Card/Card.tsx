import React from 'react';

import Image from 'next/image';

import ClientLogo from "../../assets/images/splash.png";

import styles from './Card.module.css';

import { IClient } from '../../types/client';

const Card: React.FC<IClient> = ({ name, address, company, email}) => {
    return(
        <div className={styles.card}>
            <div className={styles.logo}>
                <Image src={ClientLogo} alt={company.name} />
            </div>
            <h6 className={styles.name}>{name}</h6>
            <p className={styles.info}>Info</p>
            <div>
                <p>City: {address.city}</p>
                <p>Street: {address.street}</p>
                <p>Company: {company.name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}

export default Card;