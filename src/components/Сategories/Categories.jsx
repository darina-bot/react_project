import styles from './Categories.module.css';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';

export function Categories() {
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
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>

      </section>
    </div>
  );
}
