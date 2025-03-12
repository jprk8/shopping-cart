import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cartQty, setCartQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // pass this function to outlet for use in shop
  function handleAddCart(id, name, price, qty, imgUrl) {
    setCartItems(prevCart => {
      // check if an item already exists
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        // update the qty for existing item
        return prevCart.map(item => 
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      } else {
        // add new item to cart
        return [...prevCart, { id, name, price, qty, imgUrl }];
      }
    });
  }

  function updateCartQty(cartItems) {
    const total = cartItems.reduce((sum, item) => sum + item.qty, 0);
    setCartQty(total);
  }

  useEffect(() => {
    updateCartQty(cartItems);
    console.log('Updated Cart Qty: ', cartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log("Updated Cart Qty: ", cartQty);
  }, [cartQty]);

  return (
    <>
      <Header cartQty={cartQty} />
      <Outlet context={{ handleAddCart, cartItems, setCartItems }} />
      <Footer />
    </>
  )
}

export default App
