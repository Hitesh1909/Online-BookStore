import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 Bookstore</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Books</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/orders/list" className="hover:underline">Orders</Link>
        <Link to="/payment" className="hover:underline">Payment</Link>
        <Link to="/inventory" className="hover:underline">Inventory</Link>
        <Link to="/notifications" className="hover:underline">Notifications</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
