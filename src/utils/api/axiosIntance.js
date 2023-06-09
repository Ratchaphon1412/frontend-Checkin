import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const baseURL = 'https://ratchaphon1412.co/';
const baseURL = 'https://cloudy-cyan-shift.cyclic.app/';

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


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Redirect to login page
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      const navigate = useNavigate();
      navigate('/login');
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;