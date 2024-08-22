import PropTypes from "prop-types";
import styles from "./businessesCard.module.css";
import { generatePath, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { ROUTES } from "@/router/Routes";
import useLocalStorage from "@/hooks/useLocalStorage";

const cx = classNames.bind(styles);

const BusinessesCard = ({ business, children }) => {
  const { images, category, name, contactPerson, address, _id } = business;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, {
    category,
  });

  const [businessIds, setBusinessIds] = useLocalStorage("businessIds", []);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (!isFavorited) {
      setBusinessIds((prevIds) => [...prevIds, _id]);
    } else {
      setBusinessIds((prevIds) =>
        prevIds.filter((businessId) => businessId !== _id)
      );
    }
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const isFavorited = businessIds.includes(_id);

  return (
    <div className={styles.container} onClick={() => navigate(categoryPath)}>
      <img className={styles.image} src={images[0].url} alt={category} />
      <div className={styles.infoContainer}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        <div className={styles.buttons} onClick={handleChildClick}>
          {children}
          <span
            className={cx("heart", { favorited: isFavorited })}
            onClick={handleHeartClick}
          >
            ❤︎
          </span>
        </div>
      </div>
    </div>
  );
};

BusinessesCard.propTypes = {
  business: PropTypes.shape({
    images: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contactPerson: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default BusinessesCard;
