import React, { useState, useEffect } from 'react';
import { fetchCartItems, removeFromCart, clearCart } from '../axios';
import './CartPage.css'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; 


  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    fetchCartItems(userId)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
      })
      .catch((error) => console.error('Error removing item:', error));
  };

  const handleClearCart = () => {
    clearCart(userId)
      .then(() => {
        setCartItems([]);
      })
      .catch((error) => console.error('Error clearing cart:', error));
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding books!</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.bookId}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleClearCart} className="clear-cart-button">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
