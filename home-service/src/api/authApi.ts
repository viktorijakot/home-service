import { LoginRequest, LoginResponse, RegisterUser } from "@/types/user";
import { axiosInstance } from "./axiosConfig";

export const loginUser = async (user: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post(`/auth/login`, user);
  return await response.data;
};

export const registerUser = async (user: RegisterUser) => {
  await axiosInstance.post(`/auth/register`, user); 
};