import PropTypes from "prop-types";
import styles from "./pageTitle.module.css";

const PageTitle = ({
  headlinePartOne,
  headlinePartTwo,
  headlinePartThree,
  text,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        {headlinePartOne}{" "}
        <span className={styles.partTwo}>{headlinePartTwo} </span>
        <br />
        {headlinePartThree}
      </h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

PageTitle.propTypes = {
  headlinePartOne: PropTypes.string.isRequired,
  headlinePartTwo: PropTypes.string,
  headlinePartThree: PropTypes.string,
  text: PropTypes.string,
};

export default PageTitle;
