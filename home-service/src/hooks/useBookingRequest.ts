import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorResponse } from 'react-router-dom';
import { BookingRequest } from '@/types/booking';
import { postBooking } from '@/api/bookingApi';

export const BOOKINGS_KEY = 'BOOKINGS';

export const useBookingRequest = (): UseMutationResult<void, ErrorResponse, BookingRequest, unknown> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBooking,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [BOOKINGS_KEY] }),
  });
};
