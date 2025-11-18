import React, { useState } from 'react';
import OrderList from '../components/OrderList';  

function OrderListPage() {
  const [userId, setUserId] = useState('');

  return (
    <div>
      <h2>Your Orders</h2>

      <div>
        <label>User ID: </label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your user ID"
        />
      </div>

      {/* Pass the userId prop to OrderList component to fetch and display orders */}
      <OrderList userId={userId} />
    </div>
  );
}

export default OrderListPage;
