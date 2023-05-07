import axios from 'axios';
import { useSelector } from 'react-redux';

// const baseURL = 'https://ratchaphon1412.co/';
const baseURL = 'https://ill-pear-jackrabbit-wrap.cyclic.app/';

const axiosInstance = axios.create({
  baseURL,


});

axiosInstance.interceptors.request.use((config) => {
  // const token = useSelector((state) => state.authStore.token);
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default axiosInstance;