import { useParams } from "react-router-dom";
import styles from "./categoriesPage.module.css";
import { BUSINESSES } from "@/const/businesses";
import { CATEGORIES } from "@/const/categories";
import Button from "@/components/common/Button/Button";
import CategoryCard from "@/components/others/CategoryCard/CategoryCard";
import BusinessesCard from "@/components/others/BusinessesCard/BusinessesCard";

const CategoriesPage = () => {
  const { category } = useParams();

  const filteredBusinesses = BUSINESSES.filter(
    (business) => business.category === category
  );

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h2 className={styles.titleCat}>Categories</h2>
        {CATEGORIES.map(({ name, imgUrl }) => (
          <CategoryCard
            key={name}
            name={name}
            imgUrl={imgUrl}
            shape="rectangle"
          />
        ))}
      </div>
      <div>
        <h2 className={styles.title}>{category}</h2>
        <div className={styles.businessesCardList}>
          {filteredBusinesses.map((business) => (
            <BusinessesCard key={business._id} business={business}>
              <Button type="button" onClick={() => {}}>
                Book now
              </Button>
            </BusinessesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
