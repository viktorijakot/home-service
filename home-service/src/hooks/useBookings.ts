import { fetchBookings, fetchUserBookings } from '@/api/bookingsApi';
import { useQuery } from '@tanstack/react-query';
import useLocalStorage from './useLocalStorage';

export const BOOKINGS_KEY = 'BOOKINGS';

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

export const useUserBookings = (email: string) => {
  const [token] = useLocalStorage<string | null>('token', null);

  return useQuery({
    queryKey: [BOOKINGS_KEY, email],
    queryFn: () => {
      if (!token) {
        throw new Error('No authentication token found');
      }
      return fetchUserBookings(token, email);
    },
    enabled: !!email,
  });
};
