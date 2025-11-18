import React, { useState, useEffect } from 'react';
import { orderService } from '../axios';

function EditOrderPage({ match }) {
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('');
  const orderId = match.params.id; 

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await orderService.get(`/orders/${orderId}`);
        setOrder(response.data);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await orderService.put(`/orders/${orderId}`, { status });
      alert('Order status updated successfully!');
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  if (!order) return <p>Loading order...</p>;

  return (
    <div>
      <h2>Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order ID: </label>
          <input type="text" value={order.id} readOnly />
        </div>
        <div>
          <label>Status: </label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="PENDING">PENDING</option>
            <option value="SHIPPED">SHIPPED</option>
            <option value="DELIVERED">DELIVERED</option>
          </select>
        </div>
        <button type="submit">Update Order</button>
      </form>
    </div>
  );
}

export default EditOrderPage;
