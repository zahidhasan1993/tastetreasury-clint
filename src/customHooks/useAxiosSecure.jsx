import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DataProvider } from '../components/providers/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', 
});

const useAxiosSecure = () => {
  const { userSignOut } = useContext(DataProvider); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await userSignOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [userSignOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
