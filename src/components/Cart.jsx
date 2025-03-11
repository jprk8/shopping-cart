import styles from '../styles/Cart.module.css';
import { useOutletContext } from 'react-router-dom';
import CartItem from './CartItem';

export default function Cart() {
    // receive cartItems and setCartItems from App.jsx to list and modify cart
    const { cartItems, setCartItems } = useOutletContext();

    // function to update qty in cart
    function updateQty(id, newQty) {
        setCartItems(prevCartItems => 
            prevCartItems.map((item) =>
                item.id === id ? { ...item, qty: newQty } : item
            )
        );
    }

    // function to remove an item in cart
    function removeItem(id) {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== id)
        );
    }

    function getTotalCost() {
        return cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    }

    return (
        <div className={styles.cart}>
            <h1>My Cart</h1>
            <div className={styles.itemContainer}>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id} 
                        id={item.id}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        price={item.price}
                        qty={item.qty}
                        updateQty={updateQty}
                        removeItem={removeItem}
                    />
                ))}
            </div>
            {cartItems.length > 0 ? (
                <div className={styles.totalContainer}>
                    <h2 className={styles.total}>Total: $ {getTotalCost().toFixed(2)}</h2>
                    <button className={styles.checkout}>Checkout</button>
                </div>
            ) : (
                <div className={styles.empty}>Cart is empty</div>
            )}
        </div>
    )
}