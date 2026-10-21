import { Link } from 'react-router';
import styles from './Products.module.css';
import { ProductsCard } from './ProductsCard/ProductsCard';
import { PATH } from '../../routing/Routing';

export function Products() {
  return (
    <div className="container">
      <section className={styles.productsSection}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Ваши будущие любимые вещи</h2>
          <Link to={PATH.Catalog} className={styles.catalogLink}>
            <span>Смотреть весь каталог</span>
            <p className={styles.arrowIcon}>→</p>
          </Link>
        </div>

        <div className={styles.productsGrid}>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>

      </section>
    </div>
  );
}
