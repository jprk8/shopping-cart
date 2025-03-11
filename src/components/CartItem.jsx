import styles from '../styles/CartItem.module.css';
import minusBlack from '../assets/icons/minus-black.svg';
import plusBlack from '../assets/icons/plus-black.svg';
import trash from '../assets/icons/trash-red.svg';

export default function CartItem({ id, name, price, qty, imgUrl, updateQty, removeItem }) {
    function handleDecrement() {
        if (qty > 1) {
            updateQty(id, qty - 1);
        }
    }

    function handleIncrement() {
        if (qty < 99) {
            updateQty(id, qty + 1);
        }
    }

    return (
        <div className={styles.item}>
            <div className={styles.imgWrapper}>
                <img src={imgUrl} alt=''/>
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>$ {price}</div>
            <div className={styles.qtyContainer}>
                <div>Qty</div>
                <div className={styles.qtySelector}>
                    <button className={styles.qtyButton} onClick={handleDecrement}>
                        <img src={minusBlack} alt='' width='22px' />
                    </button>
                    <div className={styles.qty}>{qty}</div>
                    <button className={styles.qtyButton} onClick={handleIncrement}>
                        <img src={plusBlack} alt='' width='22px' />
                    </button>
                    <button className={styles.delete} onClick={() => removeItem(id)}>
                        <img src={trash} alt='delete' width='22px' />
                    </button>
                </div>
            </div>
            <div className={styles.subtotal}>Subtotal: $ {(price * qty).toFixed(2)}</div>
        </div>
    )
}