import styles from '../styles/Shop.module.css';
import Card from './Card';

export default function Shop() {
    return (
        <div className={styles.shop}>
            <h1>Shopping Page</h1>
            <div className={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

        </div>
    )
}