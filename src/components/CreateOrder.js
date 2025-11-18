import React, { useState } from 'react';
import axios from '../axios'; 

function CreateOrder() {
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/orders/create', null, {
        params: {
          userId: userId,
          bookId: bookId,
          quantity: quantity,
        },
      });
      setOrderStatus('Order placed successfully!');
    } catch (error) {
      console.error('There was an error placing the order!', error);
      setOrderStatus('Failed to place the order!');
    }
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID: </label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Book ID: </label>
          <input
            type="text"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
      {orderStatus && <p>{orderStatus}</p>}
    </div>
  );
}

export default CreateOrder;
