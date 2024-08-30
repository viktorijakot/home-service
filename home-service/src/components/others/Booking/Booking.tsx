import { useContext, useState, useEffect } from 'react';
import { TimeSlot } from '@/types/calendar';
import DatePicker from '../DatePicker/DatePicker';
import TimeSlotPicker from '../TimeSlotPicker/TimeSlotPicker';
import styles from './booking.module.css';
import Button from '@/components/common/Button/Button';
import { createMockTimeSlots } from './bookingUtils';
import { useBookingRequest } from '@/hooks/useBookingRequest';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/context/UserContext';
import { Status } from '@/types/booking';
import { Business } from '@/types/businesses';
import { ErrorResponse } from '@/types/error';
import { useBookings } from '@/hooks/useBookings';

const Booking = ({ id }: { id: Business['_id'] }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [error, setError] = useState<string>('');
  const { mutateAsync: postBooking } = useBookingRequest();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { data: bookings } = useBookings();

  useEffect(() => {
    if (selectedDate && bookings) {
      updateSlots(selectedDate, bookings);
    }
  }, [selectedDate, bookings]);

  const updateSlots = (date: Date, bookings: any[]) => {
    const slots = createMockTimeSlots(date);

    const updatedSlots = slots.map((slot) => {
      const isBooked = bookings.some(
        (booking) =>
          new Date(booking.date).toDateString() === date.toDateString() &&
          new Date(booking.time).getTime() === slot.startTime.getTime() &&
          (booking.status === 'pending' || booking.status === 'confirmed'),
      );

      return { ...slot, isBooked };
    });

    setTimeSlots(updatedSlots);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedSlot || !user) {
      return;
    }

    const status: Status = 'pending';

    const newBooking = {
      businessId: id,
      date: selectedDate,
      time: selectedSlot.startTime.toISOString(),
      userEmail: user.email,
      userName: user.name,
      status,
    };

    try {
      await postBooking(newBooking);
    } catch (error) {
      const errorMessage = error as ErrorResponse;
      setError(errorMessage?.response?.data.message ?? '');
    }
  };

  return (
    <div className={styles.bookingContainer}>
      <button type="button" className={styles.closeButton} onClick={() => navigate(`/business/${id}`)}>
        x {/* Close button, navigate to single page later */}
      </button>
      <h3>Book a Service</h3>
      <p>Select Date and Time slot to book a service</p>
      <h4>Select a Date</h4>
      <div>
        <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      </div>
      {selectedDate && (
        <>
          <h4>Select a Time Slot</h4>
          <TimeSlotPicker slots={timeSlots} onSlotSelect={handleSlotSelect} />
          <div className={styles.bookButtonContainer}>
            {error && <p className={styles.error}>{error}</p>}
            <Button type="button" onClick={handleBooking}>
              Book now
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;
