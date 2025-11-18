import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/orders"; // Backend API URL

const OrderService = {
  createOrder: (order) => axios.post(BASE_URL, order),
  fetchOrdersByUser: (userId) => axios.get(`${BASE_URL}/user/${userId}`),
  fetchAllOrders: () => axios.get(BASE_URL),
  updateOrder: (orderId, updatedOrder) => axios.put(`${BASE_URL}/${orderId}`, updatedOrder),
  deleteOrder: (orderId) => axios.delete(`${BASE_URL}/${orderId}`),
};

export default OrderService;
