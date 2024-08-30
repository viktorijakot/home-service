
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse } from 'react-router-dom';
import { BookingRequest } from '@/types/booking';
import { postBooking } from '@/api/bookingApi';
import useLocalStorage from './useLocalStorage';

export const BOOKINGS_KEY = 'BOOKINGS'

export const useBookingRequest = (): UseMutationResult<void, ErrorResponse, BookingRequest, unknown> => {
  const queryClient = useQueryClient();
  const [token] = useLocalStorage<string | null>('token', null);

  return useMutation({
    mutationFn: (booking: BookingRequest) => {
      if (token) {
        return postBooking(booking, token);
      } else {
        throw new Error('No token available');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [BOOKINGS_KEY] });
    },
  });
};