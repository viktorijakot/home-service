import styles from './BusinessPage.module.css';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import { GiNotebook } from 'react-icons/gi';
import { UserContext } from '@/context/UserContext';
import { useBusinessById } from '@/hooks/useBusinesses';
import BusinessInfo from '@/components/others/BusinessInfo/BusinessInfo';
import SimilarBusiness from '@/components/others/SimilarBusiness/SimilarBusiness';

const BusinessPage = () => {
  const { id } = useParams();
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);

  if (!id) return;

  const { data: business, isLoading, error } = useBusinessById(id);

  const handleOpenModal = () => setBookOpen(true);
  const handleCloseModal = () => setBookOpen(false);

  if (!business || isLoading || error) {
    return <div>There is no information</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <BusinessInfo business={business} />
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <Button isDisabled={!isLoggedIn} type="button" onClick={handleOpenModal}>
            <GiNotebook fontSize={20} />
            <span>Book Appointment</span>
          </Button>
        </div>
        <SimilarBusiness />
      </div>
    </div>
  );
};

export default BusinessPage;
