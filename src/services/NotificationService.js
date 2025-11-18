
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/notifications';

const NotificationService = {
  getUserNotifications: (userId) =>
    axios.get(`${API_BASE_URL}/user/${userId}`),
};

export default NotificationService;
