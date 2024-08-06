import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle
        headlinePartOne={"Find Home"}
        headlinePartTwo={"Service/Repair"}
        headlinePartThree={"Near You"}
        text="Explore Best Home Service & Repair near you"
      />
    </div>
  );
}

export default HomePage;
