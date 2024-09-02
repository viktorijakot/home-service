import styles from './SimilarBusiness.module.css';
import { generatePath, Link } from 'react-router-dom';
import { useBusinesses } from '@/hooks/useBusinesses';
import { useBusiness } from '@/hooks/useBusinesses';
import { ROUTES } from '@/router/Routes';

const SimilarBusiness: React.FC = () => {
  const { data: businesses } = useBusinesses();
  const { data: currentBusiness } = useBusiness();

  const similarBusiness = businesses?.filter(
    (business) => business.category === currentBusiness?.category && business._id !== currentBusiness._id,
  );

  return (
    <>
      <h3 className={styles.title}>Similar Business</h3>
      <div className={styles.similarContainer}>
        {similarBusiness?.map((simBusiness) => (
          <div className={styles.similarBusiness} key={simBusiness._id}>
            <img className={styles.businessImg} src={simBusiness.imageUrls[0]} alt={simBusiness.name} />
            <div className={styles.detailsContainer}>
              <Link className={styles.similarName} to={generatePath(ROUTES.BUSINESS_ID, { id: simBusiness._id })}>
                {simBusiness.name}
              </Link>
              <p className={styles.contactPerson}>{simBusiness.contactPerson}</p>
              <p>{simBusiness.address}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SimilarBusiness;
