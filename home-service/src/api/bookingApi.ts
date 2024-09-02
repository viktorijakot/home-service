import { Booking, BookingRequest } from "@/types/booking";
import { axiosInstance } from "./axiosConfig";

export const postBooking = async (booking: BookingRequest) => {
  await axiosInstance.post("/bookings", booking);
};

export const fetchBookings = async (): Promise<Booking[]> => {
  const response = await axiosInstance.get("/bookings");
  return response.data;
};
