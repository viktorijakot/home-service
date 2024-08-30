import { Booking, BookingRequest } from '@/types/booking';
import { axiosInstance } from './axiosConfig';

export const postBooking = async (booking: BookingRequest, token: string) => {
  await axiosInstance.post('/bookings', booking, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchBookings = async (token: string): Promise<Booking[]> => {
  const response = await axiosInstance.get('/bookings', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};