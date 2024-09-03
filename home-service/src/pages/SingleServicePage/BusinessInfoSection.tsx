import styles from './BusinessInfoSection.module.css';
interface BusinessInfoSectionProps {
  useBusiness: {
    about: string;
    imageUrls: string[];
  };
}

const BusinessInfoSection: React.FC<BusinessInfoSectionProps> = ({ useBusiness }) => {
  return (
    <>
      <h2 className={styles.title}>Description</h2>
      <p className={styles.sectionDescription}>{useBusiness?.about}</p>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.gallary}>
        {useBusiness?.imageUrls.map((imageUrl, index) => (
          <img className={styles.businessImg} src={imageUrl} alt={`business photo ${index}`} key={index} />
        ))}
      </div>
    </>
  );
};

export default BusinessInfoSection;
