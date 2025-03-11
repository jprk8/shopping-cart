import styles from '../styles/Shop.module.css';
import Card from './Card';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {
    const { handleAddCart } = useOutletContext();
    const [productArray, setProductArray] = useState([]);

    async function getProducts() {
        try {
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) throw new Error(response.status);
            const data = await response.json();
            setProductArray(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const showProducts = async() => {
            await getProducts();
        }
        showProducts();
    }, []);

    return (
        <div className={styles.shop}>
            <h1>All Products</h1>
            <div className={styles.cardContainer}>
                {productArray.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        imgUrl={product.image}
                        name={product.title}
                        description={product.description}
                        price={product.price.toFixed(2)}
                        handleAddCart={handleAddCart}
                    />
                ))}
            </div>

        </div>
    )
}