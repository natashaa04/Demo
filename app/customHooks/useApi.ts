"use client";
import { useDispatch } from "react-redux";
import { api } from "../api/axiosInstance"
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/userSlice";


export const useApi = () => {
  const dispatch = useAppDispatch();
  const getOilData = async () => {
    try {
      const res = await api.get("/oil");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getBlogData = async () => {
    try {
      const res = await api.get("/blog");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getTestimonialData = async () => {
    try {
      const res = await api.get("/testimonial");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async (userData: any) => {
    try {
      const res = await api.post("/auth/signup", userData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        dispatch(setUser({ user: res.data.user, token: res.data.token }));
      }
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (credentials: any) => {
    try {
      const res = await api.post("/auth/login", credentials);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        dispatch(setUser({ user: res.data.user, token: res.data.token }));
      }
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  const createProduct = async (productData: any) => {
    try {
      const res = await api.post("/oil", productData);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createBlog = async (blogData: any) => {
    try {
      const res = await api.post("/blog", blogData);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (productId: string, quantity: number = 1) => {
    try {
      const res = await api.post("/cart", { productId, quantity });
      return res.data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  const getUserCart = async () => {
    try {
      const res = await api.get("/cart");
      return res.data;
    } catch (error) {
      console.error("Error fetching user cart:", error);
      throw error;
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      const res = await api.delete(`/cart/${productId}`);
      return res.data;
    } catch (error) {
      console.error("Error removing from cart:", error);
      throw error;
    }
  };

  return {
    getOilData, getBlogData, getTestimonialData, registerUser, loginUser, createProduct, createBlog,
    addToCart,
    getUserCart,
    removeFromCart,
  };
};
