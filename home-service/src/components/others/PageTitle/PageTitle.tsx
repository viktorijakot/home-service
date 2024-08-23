import styles from "./pageTitle.module.css";

interface PageTitleProps {
  headlinePartOne: string;
  headlinePartTwo: string;
  headlinePartThree: string;
  text: string;
}
const PageTitle = ({
  headlinePartOne,
  headlinePartTwo,
  headlinePartThree,
  text,
}: PageTitleProps) => {
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

export default PageTitle;
