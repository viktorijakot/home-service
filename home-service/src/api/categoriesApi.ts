import { Category } from "@/types/categories";
import { axiosInstance } from "./axiosConfig";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return await response.data;
};
