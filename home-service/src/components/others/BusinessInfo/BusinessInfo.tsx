import { Business } from '@/types/businesses';
import styles from './businessInfo.module.css';

const BusinessInfo = ({ business }: { business: Business }) => {
  if (!business) {
    return;
  }

  const { about, images, _id } = business;
  return (
    <>
      <h2 className={styles.title}>Description</h2>
      <p className={styles.sectionDescription}>{about || 'No information'}</p>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.gallary}>
        <ul>
          {images.map(({ url }) => (
            <li key={_id}>
              <img className={styles.businessImg} src={url} alt={`business photo`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BusinessInfo;
