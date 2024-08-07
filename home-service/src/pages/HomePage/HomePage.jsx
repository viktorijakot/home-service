import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./homePage.module.css";
import Search from "../../assets/icons/search.svg";
import TextField from "../../components/TextField/TextField";

function HomePage() {
  return (
    <div className={styles.container}>
      <PageTitle
        headlinePartOne={"Find Home"}
        headlinePartTwo={"Service/Repair"}
        headlinePartThree={"Near You"}
        text="Explore Best Home Service & Repair near you"
      />
      <div className={styles.searchContainer}>
        <TextField
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={() => {}}
        />
        <Button type="submit" shape="circle" onClick={() => {}}>
          <img src={Search} alt="search" />
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
