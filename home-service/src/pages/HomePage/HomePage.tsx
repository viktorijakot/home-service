import PageTitle from "@/components/others/PageTitle/PageTitle";
import styles from "./homePage.module.css";
import Search from "@/assets/icons/search.svg";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";
import CategoryCard from "@/components/others/CategoryCard/CategoryCard";
import BusinessesCard from "@/components/others/BusinessesCard/BusinessesCard";
import { useBusinesses } from "@/hooks/useBusinesses";
import { useCategories } from "@/hooks/useCategories";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/Routes";
import { Business } from "@/types/businesses";
import Autocomplete from "@/components/others/Autocomplete/Autocomplete";
import { MouseEvent, useMemo, useState } from "react";

const HomePage = () => {
  const { data } = useBusinesses();
  const { data: categories } = useCategories();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const businesses = data ?? [];

  const handleClick = (id: Business["_id"]) => {
    const businessPath = generatePath(ROUTES.BUSINESSES_ID, {
      id,
    });
    navigate(businessPath);
  };
  const categoriesNames = categories?.map((category) => category.name);

  const filteredAutocomplete = useMemo(
    () =>
      categoriesNames
        ?.filter((data) => data.toLowerCase().includes(searchValue.trim().toLowerCase()))
        .sort((a, b) => a.localeCompare(b)),
    [categoriesNames, searchValue],
  );

  const handleSelect = (e: MouseEvent<HTMLButtonElement>, selected: string) => {
    e.preventDefault();
    setSearchValue(selected);
  };

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: searchValue });
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
          shape="rounded"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          type="submit"
          shape="circle"
          isDisabled={!categoriesNames?.includes(searchValue)}
          onClick={() => {
            navigate(categoryPath);
            setSearchValue("");
          }}
        >
          <img src={Search} alt="search" />
        </Button>
        {searchValue && filteredAutocomplete && filteredAutocomplete?.length !== 0 && (
          <Autocomplete options={filteredAutocomplete} onClick={handleSelect} />
        )}
      </div>
      <div className={styles.categoriesList}>
        {categories?.map(({ _id, name }) => (
          <CategoryCard key={_id} name={name} />
        ))}
      </div>
      <h2 className={styles.secondTitle}>Popular businesses</h2>
      <div className={styles.businessesList}>
        {businesses.map((business) => (
          <BusinessesCard key={business._id} business={business}>
            <Button type="button" onClick={() => handleClick(business._id)}>
              Book now
            </Button>
          </BusinessesCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
