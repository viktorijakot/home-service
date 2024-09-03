import styles from "./BusinessPage.module.css";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import { GiNotebook } from "react-icons/gi";
import { FiShare } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { UserContext } from "@/context/UserContext";
import { useBusinessById } from "@/hooks/useBusinesses";
import BusinessInfo from "@/components/others/BusinessInfo/BusinessInfo";
import SimilarBusiness from "@/components/others/SimilarBusiness/SimilarBusiness";
import Booking from "@/components/others/Booking/Booking";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BusinessPage = () => {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  if (!id) return;

  const { data: business, isLoading, error } = useBusinessById(id);

  const handleToggleModal = () => setIsBookingOpen(!isBookingOpen);

  if (!business || isLoading || error) {
    return <div>Is loading...</div>;
  }
  return (
    <div className={cx("container", { shadow: isBookingOpen })}>
      <div className={styles.leftContainer}>
        <BusinessInfo business={business} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.availabilityContainer}>
          <Button type="button" onClick={() => {}}>
            <FiShare className={styles.shareIcon} />
          </Button>
          <p className={styles.contactPerson}>
            <AiOutlineUser className={styles.iconUser} />
            {business.contactPerson}
          </p>
          <p className={styles.availability}>
            <CiClock2 className={styles.iconClock} />
            Available 8:00 AM to 3:00 PM
          </p>
        </div>
        <Button shape="fullWidth" isDisabled={!isLoggedIn} type="button" onClick={handleToggleModal}>
          <GiNotebook className={styles.icon} />
          <span>Book Appointment</span>
        </Button>
        <SimilarBusiness currentBusiness={business} />
      </div>
      {isBookingOpen && <Booking id={id} onClose={handleToggleModal} />}
    </div>
  );
};

export default BusinessPage;
