import { Booking } from "@/types/booking";
import { axiosInstance } from "./axiosConfig";

export const fetchBookings = async (): Promise<Booking[]> => {
  const response = await axiosInstance.get("/bookings");
  return response.data;
};

export const fetchUserBookings = async (email: string): Promise<Booking[]> => {
  const response = await axiosInstance.get(`/bookings/user/${email}`);
  return response.data;
};
