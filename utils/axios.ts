"use client";

import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      // Add other headers as needed
    },
  });
  
  export default instance;