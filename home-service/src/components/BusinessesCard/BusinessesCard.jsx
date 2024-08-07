import PropTypes from "prop-types";
import styles from "./businessesCard.module.css";

function BusinessesCard({
  imgUrl,
  category,
  name,
  contactPerson,
  address,
  children,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imgUrl} alt={category} />
      <div className={styles.infoContainer}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        {children}
      </div>
    </div>
  );
}

BusinessesCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contactPerson: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BusinessesCard;
