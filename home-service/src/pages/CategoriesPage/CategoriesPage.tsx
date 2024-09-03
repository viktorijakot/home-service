import { generatePath, useNavigate, useParams } from "react-router-dom";
import styles from "./categoriesPage.module.css";
import CategoryCard from "@/components/others/CategoryCard/CategoryCard";
import BusinessesCard from "@/components/others/BusinessesCard/BusinessesCard";
import Button from "@/components/common/Button/Button";
import { useBusinesses } from "@/hooks/useBusinesses";
import { useCategories } from "@/hooks/useCategories";
import { Business } from "@/types/businesses";
import { ROUTES } from "@/router/Routes";

const CategoriesPage = () => {
  const { category } = useParams();
  const { data } = useBusinesses();
  const { data: categories } = useCategories();
  const businesses = data ?? [];
  const navigate = useNavigate();

  const filteredBusinesses = businesses.filter((business) => business.category === category);

  const handleClick = (id: Business["_id"]) => {
    const businessPath = generatePath(ROUTES.BUSINESSES_ID, {
      id,
    });
    navigate(businessPath);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h2 className={styles.titleCat}>Categories</h2>
        {categories?.map(({ _id, name }) => (
          <CategoryCard key={_id} name={name} shape="rectangle" />
        ))}
      </div>
      <div>
        <h2 className={styles.title}>{category}</h2>
        <div className={styles.businessesCardList}>
          {filteredBusinesses.map((business) => (
            <BusinessesCard key={business._id} business={business}>
              <Button type="button" onClick={() => handleClick(business._id)}>
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
