import styles from './BusinessPage.module.css';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import { GiNotebook } from 'react-icons/gi';
import BusinessInfoSection from '@/pages/SingleServicePage/BusinessInfoSection';
import SimilarBusiness from '@/pages/SingleServicePage/SimilarBusiness';
import { UserContext } from '@/context/UserContext';
import { useBusiness } from '@/hooks/useBusinesses';

const BusinessPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [bookOpen, setBookOpen] = useState<boolean>(false);
  const { isLoggedIn } = useContext(UserContext);
  const { data: business, isLoading, error } = useBusiness();

  const handleOpenModal = () => setBookOpen(true);
  const handleCloseModal = () => setBookOpen(false);

  if (!id || isLoading || error) return null;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <BusinessInfoSection useBusiness={business || { about: '', imageUrls: [] }} />
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <Button disabled={!isLoggedIn} className={styles.button} onClick={handleOpenModal}>
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
