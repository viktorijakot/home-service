import { Booking } from '@/types/bookings';
import { axiosInstance } from './axiosConfig';
import useLocalStorage from '@/hooks/useLocalStorage';

export const fetchBookings = async (token: string): Promise<Booking[]> => {
  const response = await axiosInstance.get('/bookings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const fetchUserBookings = async (token: string, email: string): Promise<Booking[]> => {
  const response = await axiosInstance.get(`/bookings/user/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
