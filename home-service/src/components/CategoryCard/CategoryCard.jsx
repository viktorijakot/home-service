import styles from "./categoryCard.module.css";
import PropTypes from "prop-types";

function CategoryCard({ imgUrl, name }) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={name} />
      {name}
    </div>
  );
}

CategoryCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
