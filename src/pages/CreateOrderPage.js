import React, { useState } from 'react';
import CreateOrder from '../components/CreateOrder'; 

function CreateOrderPage() {
  const [userId, setUserId] = useState('');

  return (
    <div>
      <h2>Place Your Order</h2>

      <div>
        <label>User ID: </label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your user ID"
        />
      </div>

      {/* Pass the userId prop to CreateOrder component */}
      <CreateOrder userId={userId} />
    </div>
  );
}

export default CreateOrderPage;
