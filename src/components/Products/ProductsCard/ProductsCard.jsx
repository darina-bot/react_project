import styles from './Products.module.css';
import cardImg from '../../../assets/cardImg.png';
import { Link } from 'react-router';
import { PATH } from '../../../routing/Routing';
import { categories } from '../../../../dist/assets/data';

export function ProductsCard({product}) {
     const category = categories.find(category => category.id == product.categoryId);
    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={product.image}
                    alt="img"
                    className={styles.productImage}
                />
            </div>

            <div className={styles.productInfo}>
                <span className={styles.productCategory}>{category.title}</span>
                <h3 className={styles.productTitle}>{product.title}</h3>
            </div>

            <div className={styles.productFooter}>
                <span className={styles.productPrice}>{product.price} ₽</span>
                <Link to={`/product/${product.id}`}>
                <button type="button" className={styles.cartButton}>
                    В корзину
                </button>
                </Link>
            </div>
        </div>
    );
}