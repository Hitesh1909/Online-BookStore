
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/payment';

const PaymentService = {
  processPayment: (orderId, amount) =>
    axios.post(`${API_BASE_URL}/process`, {
      orderId,
      amount,
    }),
};

export default PaymentService;
