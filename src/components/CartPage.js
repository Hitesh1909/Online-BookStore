import React, { useState, useEffect } from 'react';
import { fetchCartItems, addToCart, removeFromCart, clearCart } from '../axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // Replace with actual user ID

  useEffect(() => {
    fetchCartItems(userId)
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id).then(() => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    });
  };

  const handleClear = () => {
    clearCart(userId).then(() => setCartItems([]));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              Book ID: {item.bookId} | Quantity: {item.quantity}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClear}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
