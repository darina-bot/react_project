import styles from './Products.module.css';
import cardImg from '../../../assets/cardImg.png';
import { Link } from 'react-router';
import { PATH } from '../../../routing/Routing';

export function ProductsCard() {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={cardImg}
                    alt="img"
                    className={styles.productImage}
                />
            </div>

            <div className={styles.productInfo}>
                <span className={styles.productCategory}>Посуда</span>
                <h3 className={styles.productTitle}>Кружка «Утро»</h3>
            </div>

            <div className={styles.productFooter}>
                <span className={styles.productPrice}>890 ₽</span>
                <Link to={PATH.Product}>
                <button type="button" className={styles.cartButton}>
                    В корзину
                </button>
                </Link>
            </div>
        </div>
    );
}