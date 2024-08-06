import PropTypes from "prop-types";
import styles from "./pageTitle.module.css";

function PageTitle({ headlineParts, text }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>
        {headlineParts[0] && headlineParts[0]}
        <span className={styles.partTwo}>
          {headlineParts[1] && headlineParts[1]}
        </span>
        <br />
        {headlineParts[2] && headlineParts[2]}
      </h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

PageTitle.propTypes = {
  headlineParts: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
};

export default PageTitle;
