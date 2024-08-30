import { TimeSlot } from '@/types/calendar';
import { addMinutes, startOfDay } from 'date-fns';

export const createMockTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const slotDuration = 30;
  const slotsPerDay = 16;

  for (let i = 0; i < slotsPerDay; i++) {
    const startTime = addMinutes(startOfDay(date), 8 * 60 + i * slotDuration);
    slots.push({ startTime, isBooked: false });
  }

  return slots;
};
