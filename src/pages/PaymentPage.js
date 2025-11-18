import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/payment/process', {
        orderId,
        amount: 100, // Replace with real logic
      });
      setStatus(res.data.message || 'Payment successful!');
    } catch (error) {
      setStatus('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {status && <p className="mt-4 text-center font-semibold">{status}</p>}
    </div>
  );
};

export default PaymentPage;
