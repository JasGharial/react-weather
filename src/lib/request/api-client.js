// Dependencies
import axios from "axios";

// Environments
import { env } from "../../config/env";

const API_HEADERS = {
  'Content-Type': 'application/json'
}

const api = axios.create({
  baseURL: env.VITE_BASE_URL,
  headers: API_HEADERS
})

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);

    return Promise.reject(error);
  },
);

export default api;
