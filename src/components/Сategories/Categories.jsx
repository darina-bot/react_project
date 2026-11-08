import { useState } from 'react';
import styles from './Categories.module.css';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';
import { useEffect } from 'react';

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function load() {
      try {
        const res = await fetch('http://localhost:3000/categories');
        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        }
        const categories = await res.json();
        setCategories(categories);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);
  if (error) {
    return <p>Не удалось загрузить категории: {error}</p>
  }
  if (categories.length === 0) {
    return <p>Категории не найдены</p>
  }
  return (
    <div className="container">
      <section className={styles.categoriesSection}>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Найдите своё для дома</h2>
          <a href="#" className={styles.allCategoriesLink}>
            <span>Все категории</span>
            <p className={styles.arrowIcon}>→</p>
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {
            categories.map(category => <CategoriesCard key={category.id} category={category} />)
          }
        </div>


      </section>
    </div>
  );
}
