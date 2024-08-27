import styles from './businessesCard.module.css';
import { generatePath, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MouseEvent } from 'react';
import { ROUTES } from '@/router/Routes';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Business } from '@/types/businesses';

const cx = classNames.bind(styles);

interface BusinessesCardProps {
  business: Business;
  children?: React.ReactNode;
}

const BusinessesCard = ({ business, children }: BusinessesCardProps) => {
  const { images, category, name, contactPerson, address, _id } = business;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, {
    category,
  });

  const [businessIds, setBusinessIds] = useLocalStorage<string[]>('businessIds', []);

  const handleHeartClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const isFavorited = businessIds.includes(_id);

    if (!isFavorited) {
      setBusinessIds((prevIds) => [...prevIds, _id]);
    } else {
      setBusinessIds((prevIds) => prevIds.filter((businessId) => businessId !== _id));
    }
  };

  const handleChildClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const isFavorited = businessIds.includes(_id);

  return (
    <div className={styles.container} onClick={() => navigate(categoryPath)}>
      <img className={styles.image} src={images[0].url} alt={category} />
      <div className={styles.infoContainer}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        <div className={styles.buttons} onClick={handleChildClick}>
          {children}
          <span className={cx('heart', { favorited: isFavorited })} onClick={handleHeartClick}>
            ❤︎
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessesCard;
