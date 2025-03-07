import styles from '../styles/Shop.module.css';
import Card from './Card';
import { useState, useEffect } from 'react';

export default function Shop() {

    const [productArray, setProductArray] = useState([]);

    async function getProducts() {
        try {
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url, { mode: 'cors' });
            if (!response.ok) throw new Error(response.status);
            const data = await response.json();
            setProductArray(data);
            console.log(data);
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
            <h1>Shopping Page</h1>
            <div className={styles.cardContainer}>
                {productArray.map((product) => (
                    <Card
                        key={product.id}
                        imgUrl={product.image}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>

        </div>
    )
}