import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BooksPage from './pages/BooksPage';
import RegisterPage from './pages/RegisterPage';
import CreateOrderPage from './pages/CreateOrderPage';
import OrderListPage from './pages/OrderListPage';
import EditOrderPage from './pages/EditOrderPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import InventoryPage from './pages/InventoryPage';
import NotificationPage from './pages/NotificationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Online Bookstore</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders/create" element={<CreateOrderPage />} />
          <Route path="/orders/list" element={<OrderListPage />} />
          <Route path="/orders/edit/:id" element={<EditOrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
