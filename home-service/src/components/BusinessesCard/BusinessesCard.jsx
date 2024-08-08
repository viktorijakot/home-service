import PropTypes from "prop-types";
import styles from "./businessesCard.module.css";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/Routes";
import useLocalStorage from "../../hooks/useLocalStorage";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function BusinessesCard({
  imgUrl,
  category,
  name,
  contactPerson,
  address,
  children,
  id,
}) {
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, {
    category: category,
  });
  const [businessIds, setBusinessIds] = useLocalStorage("businessIds", []);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (!isFavorited) {
      setBusinessIds((prevIds) => [...prevIds, id]);
    } else {
      setBusinessIds((prevIds) =>
        prevIds.filter((businessId) => businessId !== id)
      );
    }
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const isFavorited = businessIds.includes(id);

  return (
    <div className={styles.container} onClick={() => navigate(categoryPath)}>
      <img className={styles.image} src={imgUrl} alt={category} />
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
}

BusinessesCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contactPerson: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

export default BusinessesCard;
