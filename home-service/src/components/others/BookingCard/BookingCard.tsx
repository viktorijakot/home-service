import { Business } from "@/types/businesses";
import { format } from "date-fns";
import styles from "./bookingCard.module.css";
import classNames from "classnames/bind";
import { Booking } from "@/types/booking";

const cx = classNames.bind(styles);

interface BookingCardProps {
  business: Business;
  booking: Booking;
}

const BookingCard = ({ business, booking }: BookingCardProps) => {
  const { imageUrls, contactPerson, address, name } = business;
  const { date, time } = booking;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageUrls[0]} alt={name} />
      <div className={styles.infoContainer}>
        <h4>{name}</h4>
        <p className={cx("contactPerson", "infoDisplayed")}>
          <img src="../src/assets/icons/user.png" />
          {contactPerson}
        </p>
        <p className={cx("infoDisplayed")}>
          <img src="../src/assets/icons/location.png" />
          {address}
        </p>
        <p className={cx("infoDisplayed")}>
          <img src="../src/assets/icons/calendar.png" />
          <span>
            Service on: <b>{format(new Date(date), "dd-MMMM-yyyy")}</b>
          </span>
        </p>
        <p className={cx("infoDisplayed")}>
          <img src="../src/assets/icons/clock.png" />
          <span>
            Service on: <b>{format(new Date(time), "hh:mm a")}</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
