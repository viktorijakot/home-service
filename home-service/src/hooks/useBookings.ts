import { useQuery } from "@tanstack/react-query";
import { BOOKINGS_KEY } from "./useBookingRequest";
import { fetchBookings } from "@/api/bookingApi";
import useLocalStorage from "./useLocalStorage";


export const useBookings = () => {
  const [token] = useLocalStorage<string | null>('token', null);

  return useQuery({
    queryKey: [BOOKINGS_KEY],
    queryFn: () => {
      if (!token) {
        throw new Error('No authentication token found');
      }
      return fetchBookings(token);
    },
  });
}