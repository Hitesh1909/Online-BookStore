import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/inventory/all')
      .then(res => setInventory(res.data))
      .catch(err => console.error('Error:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Inventory Management</h2>
      {loading ? (
        <p>Loading inventory...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Book ID</th>
              <th className="border p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.bookId}>
                <td className="border p-2">{item.bookId}</td>
                <td className="border p-2">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoryPage;
