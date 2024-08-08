import styles from "./categoryCard.module.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../router/Routes";

const cx = classNames.bind(styles);

function CategoryCard({ imgUrl, name, shape }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, {
    category: name,
  });

  return (
    <div
      className={cx("container", shape, { active: category === name })}
      onClick={() => navigate(categoryPath)}
    >
      <img src={imgUrl} alt={name} />
      {name}
    </div>
  );
}

CategoryCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(["rectangle", "square"]),
};

export default CategoryCard;
