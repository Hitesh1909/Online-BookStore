
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/inventory';

const InventoryService = {
  getAllInventory: () => axios.get(`${API_BASE_URL}/all`),
};

export default InventoryService;
