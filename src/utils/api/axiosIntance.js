import axios from 'axios';


// const baseURL = 'https://ratchaphon1412.co/';
const baseURL = 'http://localhost:8000/';

const axiosInstance = axios.create({
  baseURL,


});

// axiosInstance.interceptors.request.use((config) => {
  
  
//   if () {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('authentication')}`;
//   }
//   return config;
// });

export default axiosInstance;