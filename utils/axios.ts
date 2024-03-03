"use client";

import axios from "axios";


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
