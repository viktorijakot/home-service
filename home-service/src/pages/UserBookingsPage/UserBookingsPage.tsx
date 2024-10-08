import BookingCard from "@/components/others/BookingCard/BookingCard";
import Tabs from "@/components/others/Tabs/Tabs";
import { UserContext } from "@/context/UserContext";
import { useBusinesses } from "@/hooks/useBusinesses";
import { useContext, useState } from "react";
import { useUserBookings } from "@/hooks/useBookings";
import styles from "./userBookingsPage.module.css";
import { tabsData } from "./const";

function UserBookingsPage() {
  const { user } = useContext(UserContext);
  const { data: businessesData } = useBusinesses();
  const { data, error, isLoading } = useUserBookings(user?.email || "");
  const [selectedTab, setSelectedTab] = useState(tabsData[0].label);
  const businesses = businessesData ?? [];
  const userBookings = data ?? [];
  const now = new Date();

  const [upcomingBookings, pastBookings] = userBookings.reduce(
    ([upcoming, past], booking) => {
      const bookingDate = new Date(booking.date);
      return bookingDate > now ? [[...upcoming, booking], past] : [upcoming, [...past, booking]];
    },
    [[], []] as [typeof userBookings, typeof userBookings],
  );

  const displayedBookings = selectedTab === "Booked" ? upcomingBookings : pastBookings;

  if (isLoading) return <div className={styles.message}>Loading...</div>;
  if (error) return <div className={styles.message}>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <h1>My Bookings</h1>
      <Tabs tabsData={tabsData} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        {displayedBookings.length > 0 ? (
          <ul className={styles.cardsContainer}>
            {displayedBookings.map((booking) => {
              const business = businesses.find((b) => b._id === booking.businessId);

              if (!business) {
                return null;
              }

              return (
                <li key={booking._id}>
                  <BookingCard booking={booking} business={business} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.message}>There are no bookings.</p>
        )}
      </Tabs>
    </div>
  );
}

export default UserBookingsPage;
