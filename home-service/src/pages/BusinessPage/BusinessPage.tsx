import styles from "./BusinessPage.module.scss";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import { GiNotebook } from "react-icons/gi";
import BusinessInfoSection from "@/pages/SingleServicePage/BusinessInfoSection";
import SimilarBusiness from "@/pages/SingleServicePage/SimilarBusiness";
import { UserContext } from "@/types/user";

const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  const handleOpenModal = () => setBookOpen(true);
  const handleCloseModal = () => setBookOpen(false);

  if (!id) return null;

  return (
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <BusinessInfoSection />
          </div>
          <div>
            <div className={styles.buttonContainer}>
              {!isLoggedIn ? (
                <Button
                  disabled
                  className={styles.button}
                  onClick={handleOpenModal}
                >
                  <GiNotebook fontSize={20} />
                  <span>Book Appointment</span>
                </Button>
              ) : 
                  <span>Book Appointment</span>
                </Button>
              )
            </div>
            <SimilarBusiness />
          </div>
  );
};

export default BusinessPage;