import React, { useEffect, useState } from 'react';

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";

import Card from '../Card';

import axiosInstance from '../../HTTPServices/axiosInstance';

import { IClient } from '../../types/client';

import styles from './Clients.module.css';

const Clients = () => {
    const [clients, setClients] = useState<IClient[]>([]);

    const getData = async () => {
        try {
            const { data } = await axiosInstance.get('/users?limit=10')
            setClients(data)
        } catch (err) {
        let error = err; 
            return console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.section}>
            <Flicking
                useFindDOMNode={true}
                renderOnlyVisible={true}
                circular={true}
            >
                {clients.map(client => {
                    return <div key={client.id} className='flicking-panel'>
                        <Card
                            id={client.id}
                            name={client.name}
                            email={client.email}
                            address={client.address}
                            company={client.company}
                        />
                    </div>
                })}
            </Flicking>
        </div>
    )
}

export default Clients;