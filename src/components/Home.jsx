import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.welcome}>
                <div className={styles.welcomeTitle}>Welcome to Fake Shop</div>
                <p className={styles.welcomeText}>This online store is created as part of the Odin Project.
                    <br /> Created with React and FakeStore API.
                    <br /> You can explore the source code on my
                    &nbsp;<a href='https://github.com/jprk8/shopping-cart' target='_blank' rel='noopener noreferrer'>GitHub Respository</a>.
                </p>
                <div className={styles.linkContainer}>
                    <Link to='/shop'>
                        <button className={styles.browseBtn}>Browse Products</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}