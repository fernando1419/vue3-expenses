import axios from 'axios';

const api = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   headers: { 'Content-Type': 'application/json' },
});

// Interceptor for adding token to every request.
api.interceptors.request.use(config => {
   const token = localStorage.getItem('token'); // hardcoded token
   if (token) {
      config.headers.Authorization = token;
   }
   return config;
}, error => {
   return Promise.reject(error);
});

export default api;
