import styles from "./similarBusiness.module.css";
import { generatePath, NavLink } from "react-router-dom";
import { useBusinesses } from "@/hooks/useBusinesses";
import { ROUTES } from "@/router/Routes";
import { Business } from "@/types/businesses";

const SimilarBusiness = ({ currentBusiness }: { currentBusiness: Business }) => {
  const { data } = useBusinesses();
  const businesses = data ?? [];

  const similarBusiness = businesses.filter(
    (business) => business.category === currentBusiness?.category && business._id !== currentBusiness._id,
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Similar Business</h3>
      <div className={styles.similarContainer}>
        {similarBusiness.length > 0 ? (
          similarBusiness?.map((simBusiness) => (
            <div className={styles.similarBusiness} key={simBusiness._id}>
              <img className={styles.businessImg} src={simBusiness.imageUrls[0]} alt={simBusiness.name} />
              <div className={styles.detailsContainer}>
                <NavLink
                  className={styles.similarName}
                  to={generatePath(ROUTES.BUSINESSES_ID, { id: simBusiness._id })}
                >
                  {simBusiness.name}
                </NavLink>
                <p className={styles.contactPerson}>{simBusiness.contactPerson}</p>
                <p>{simBusiness.address}</p>
              </div>
            </div>
          ))
        ) : (
          <div>There is no simmilar business</div>
        )}
      </div>
    </div>
  );
};

export default SimilarBusiness;
