export type TimeSlot = {
  startTime: Date;
  isBooked: boolean;
};

export type DaySchedule = {
  date: Date;
  slots: TimeSlot[];
};
