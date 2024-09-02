import { fetchBookings, fetchUserBookings } from "@/api/bookingsApi";
import { useQuery } from "@tanstack/react-query";

export const BOOKINGS_KEY = "BOOKINGS";

export const useBookings = () => {
  return useQuery({
    queryKey: [BOOKINGS_KEY],
    queryFn: fetchBookings,
  });
};

export const useUserBookings = (email: string) => {
  return useQuery({
    queryKey: [BOOKINGS_KEY, email],
    queryFn: () => fetchUserBookings(email),
  });
};
