import { Business } from "@/types/businesses";
import styles from "./businessInfo.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const BusinessInfo = ({ business }: { business: Business }) => {
  if (!business) {
    return;
  }

  const { about, imageUrls, _id, name, category, address, email } = business;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img className={styles.firstImage} src={imageUrls[0]} alt={`${name} business photo`} />
        <div className={styles.textInfoContainer}>
          <div className={styles.category}>{category}</div>
          <h1 className={styles.title}>{name}</h1>
          <p className={styles.iconsContainer}>
            <CiLocationOn className={styles.icon} />
            {address}
          </p>
          <p className={styles.iconsContainer}>
            <HiOutlineMail className={styles.icon} />
            {email}
          </p>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Description</h2>
        <p className={styles.description}>{about || "No information"}</p>
      </div>
      <div>
        <h2 className={styles.title}>Gallery</h2>
        <ul className={styles.gallery}>
          {imageUrls.map((image: string) => (
            <li key={image}>
              <img className={styles.businessImg} src={image} alt={`${name} business photo`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessInfo;
