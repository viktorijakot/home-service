import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./homePage.module.css";
import Search from "../../assets/icons/search.svg";
import TextField from "../../components/TextField/TextField";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { CATEGORIES } from "../../const/categories";
import BusinessesCard from "../../components/BusinessesCard/BusinessesCard";
import { BUSINESSES } from "../../const/businesses";

const HomePage = () => {
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
      <div className={styles.categoriesList}>
        {CATEGORIES.map(({ name, imgUrl }) => (
          <CategoryCard key={name} name={name} imgUrl={imgUrl} />
        ))}
      </div>
      <h2 className={styles.secondTitle}>Popular businesses</h2>
      <div className={styles.businessesList}>
        {BUSINESSES.map(
          ({ name, _id, category, address, contactPerson, images }) => (
            <BusinessesCard
              key={_id}
              name={name}
              category={category}
              address={address}
              contactPerson={contactPerson}
              imgUrl={images[0].url}
              id={_id}
            >
              <Button type="button" onClick={() => {}}>
                Book now
              </Button>
            </BusinessesCard>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
