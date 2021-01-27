import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.button}>
                <NavLink to="/form">FORM</NavLink>
            </div>
        </div>
    )
}

export default Home;