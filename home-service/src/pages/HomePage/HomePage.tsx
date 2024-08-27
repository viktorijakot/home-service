import PageTitle from '@/components/others/PageTitle/PageTitle';
import styles from './homePage.module.css';
import Search from '@/assets/icons/search.svg';
import TextField from '@/components/common/TextField/TextField';
import Button from '@/components/common/Button/Button';
import CategoryCard from '@/components/others/CategoryCard/CategoryCard';
import BusinessesCard from '@/components/others/BusinessesCard/BusinessesCard';
import { useEffect, useState } from 'react';
import { fetchBusinesses } from '@/api/businessesApi';
import { fetchCategories } from '@/api/categoriesApi';
import { Category } from '@/types/categories';
import { Business } from '@/types/businesses';

const HomePage = () => {
  const [business, setBusiness] = useState<Business[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchBusinesses()
      .then((resp) => {
        setBusiness(resp);
      })
      .catch((err) => console.error(err));

    fetchCategories()
      .then((resp) => {
        setCategories(resp);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle
        headlinePartOne={'Find Home'}
        headlinePartTwo={'Service/Repair'}
        headlinePartThree={'Near You'}
        text="Explore Best Home Service & Repair near you"
      />
      <div className={styles.searchContainer}>
        <TextField type="text" name="search" id="search" placeholder="Search" onChange={() => {}} />
        <Button type="submit" shape="circle" onClick={() => {}}>
          <img src={Search} alt="search" />
        </Button>
      </div>
      <div className={styles.categoriesList}>
        {categories.map(({ _id, name }) => (
          <CategoryCard key={_id} name={name} />
        ))}
      </div>
      <h2 className={styles.secondTitle}>Popular businesses</h2>
      <div className={styles.businessesList}>
        {business.map((business) => (
          <BusinessesCard key={business._id} business={business}>
            <Button type="button" onClick={() => {}}>
              Book now
            </Button>
          </BusinessesCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
