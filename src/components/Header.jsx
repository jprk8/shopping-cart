import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom';

export default function Header({ cartQty }) {

    return (
        <div className={styles.header}>
            <div className={styles.shopName}>Fake Shop</div>
            <div className={styles.nav}>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/shop'>
                    Shop
                </Link>
            </div>
            <div className={styles.cart}>
                <Link to='/cart'>
                    Cart {cartQty}
                </Link>
            </div>
        </div>
    )

}