import { useQuery } from "@tanstack/react-query";
import { BOOKINGS_KEY } from "./useBookingRequest";
import { fetchBookings } from "@/api/bookingApi";

export const useBookings = () => {
  return useQuery({
    queryKey: [BOOKINGS_KEY],
    queryFn: fetchBookings,
  });
};
