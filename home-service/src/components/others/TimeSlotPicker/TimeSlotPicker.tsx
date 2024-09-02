import { TimeSlot } from "@/types/calendar";
import { format, isBefore } from "date-fns";
import styles from "./timeSlotPicker.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  onSlotSelect: (slot: TimeSlot) => void;
}

const TimeSlotPicker = ({ slots, onSlotSelect }: TimeSlotPickerProps) => {
  const [activeSlot, setActiveSlot] = useState<TimeSlot | null>(null);
  const now = new Date();

  const handleClick = (slot: TimeSlot) => {
    onSlotSelect(slot);
    setActiveSlot(slot);
  };

  return (
    <div className={styles.timeSlotContainer}>
      {slots.map((slot) => {
        const isPast = isBefore(new Date(slot.startTime), now);
        return (
          <button
            key={new Date(slot.startTime).getTime()}
            className={cx("timeSlot", { booked: slot.isBooked, active: slot === activeSlot, disabled: isPast })}
            onClick={() => handleClick(slot)}
            disabled={slot.isBooked || isPast}
          >
            {format(new Date(slot.startTime), "h:mm a")}
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlotPicker;
