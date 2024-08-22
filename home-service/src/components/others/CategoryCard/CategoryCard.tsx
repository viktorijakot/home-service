import { ROUTES } from '@/router/Routes';
import styles from './categoryCard.module.css';
import classNames from 'classnames/bind';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

export interface CategoryCardProps {
  imgUrl: string;
  name: string;
  shape?: 'rectangle' | 'square';
}

const CategoryCard = ({ imgUrl, name, shape }: CategoryCardProps) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, {
    category: name,
  });

  return (
    <div className={cx('container', shape, { active: category === name })} onClick={() => navigate(categoryPath)}>
      <img src={imgUrl} alt={name} />
      {name}
    </div>
  );
};

export default CategoryCard;
