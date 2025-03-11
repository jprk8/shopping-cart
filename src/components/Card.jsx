import styles from '../styles/Card.module.css';
import { useState } from 'react';
import minus from '../assets/icons/minus-black.svg';
import plus from '../assets/icons/plus-black.svg';

export default function Card({ id, imgUrl, name, description, price, handleAddCart }) {
    const [qty, setQty] = useState(1);

    function handleInputChange(event) {
        const value = event.target.value;
        if (value === '') {
            setQty('')
        } else {
            const numValue = parseInt(value, 10);
            if (numValue > 0 && numValue <= 99) {
                setQty(numValue);
            }
        }
    }

    function handleBlur() {
        if (qty === '') {
            setQty(1);
        }
    }

    function handleIncrease() {
        setQty(prev => prev + 1);
    }

    function handleDecrease() {
        if (qty > 1) {
            setQty(prev => prev - 1);
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img src={imgUrl} alt='product image'/>
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>$ {price}</div>
            <div className={styles.qtyContainer}>
                <div>Quantity: </div>
                <div className={styles.qtySelector}>
                    <button className={styles.qtyButton} onClick={handleDecrease}>
                        <img src={minus} alt=''/>
                    </button>
                    <input
                        type='number'
                        className={styles.qty}
                        value={qty}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        min='1'
                        max='99'
                    />
                    <button className={styles.qtyButton} onClick={handleIncrease}>
                        <img src={plus} alt=''/>
                    </button>
                </div>
            </div>
            <div className={styles.cardButton}>
            <button className={styles.view}>
                    Details
            </button>
            <button
                className={styles.addCart}
                onClick={() => handleAddCart(id, name, price, qty, imgUrl)}
            >
                Add to Cart
            </button>
            </div>

        </div>
    )
}