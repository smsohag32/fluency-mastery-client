import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// base url
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

// access token send to server and secure to apis
const useAxiosSecure = () => {
  const { userLogout, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          await userLogout();
          setLoading(false);
          navigate("/login");
        }
        return Promise.reject(err);
      }
    );
  }, [userLogout, navigate]);

  return { axiosSecure };
};

export default useAxiosSecure;
