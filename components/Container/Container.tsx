import React from 'react';

import styles from './Container.module.css';

interface IContainerProps {
  children: JSX.Element[] | JSX.Element
};

const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};

export default Container;