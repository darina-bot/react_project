import { Link } from 'react-router';
import styles from './Products.module.css';
import { ProductsCard } from './ProductsCard/ProductsCard';
import { PATH } from '../../routing/Routing';
import { useState } from 'react';
import { useEffect } from 'react';

export function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function load() {
      try {
        const res = await fetch('http://localhost:3000/products');
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [])

  if (error) {
    return <p>Не удалось загрузить товары: {error}</p>
  }
  if (products.length === 0) {
    return <p>Товары не найдены</p>
  }
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
          {
            products.slice(0, 4).map((product) => <ProductsCard key={product.id} product={product} />)
          }
        </div>

      </section>
    </div>
  );
}
