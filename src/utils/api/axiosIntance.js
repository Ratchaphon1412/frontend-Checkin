import axios from 'axios';


// const baseURL = 'https://ratchaphon1412.co/';
const baseURL = 'https://ill-pear-jackrabbit-wrap.cyclic.app/';

const axiosInstance = axios.create({
  baseURL,


});

axiosInstance.interceptors.request.use((config) => {
 
  
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default axiosInstance;