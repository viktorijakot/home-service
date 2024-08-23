import { Business } from "@/types/businesses";
import { axiosInstance } from "./axiosConfig";


export const fetchBusinesses = async (): Promise<Business[]> => {
  const response = await axiosInstance.get("/businesses");
  return await response.data;
};
