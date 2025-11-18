import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/cart"; // Backend API URL

const CartService = {
  fetchCartItems: (userId) => axios.get(`${BASE_URL}/${userId}`),
  addToCart: (cartItem) => axios.post(BASE_URL, cartItem),
  removeFromCart: (cartItemId) => axios.delete(`${BASE_URL}/${cartItemId}`),
  clearCart: (userId) => axios.delete(`${BASE_URL}/clear/${userId}`),
};

export default CartService;
