import { ProductsCard } from '../../components/Products/ProductsCard/ProductsCard';
import styles from './CatalogPage.module.css';
import Search from '../../assets/search.png'
import { categories, products } from '../../../dist/assets/data';

export function CatalogPage() {
    return (
        <div className="container">
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>Вещи для вашего дома</div>
                    <div className={styles.headerSubtitle}>
                        Выбирайте то, что делает каждый день уютнее.
                    </div>
                </div>

                <div className={styles.toolbar}>
                    <div className={styles.searchBox}>
                        <div className={styles.searchIcon}>
                            <img src={Search} alt="" className={styles.searchIconInner} />
                        </div>
                        <input type="text" className={styles.searchInput} placeholder="Поиск по товарам: плед, кружка, ваза…" />
                    </div>
                    <div className={styles.sortBox}>
                        <select className={styles.sortSelect}>
                            <option>Цена: по возрастанию</option>
                            <option>Цена: по убыванию</option>
                            <option>Сначала новые</option>
                        </select>
                    </div>
                </div>


                <div className={styles.content}>
                    <div className={styles.sidebar}>
                        <div className={styles.sidebarTitle}>Категории</div>
                        <div className={styles.categoryList}>
                            <div className={`${styles.categoryItem} ${styles.categoryItemActive}`}>
                                <div className={styles.categoryTextActive}>Все товары</div>
                            </div>
                            {
                                categories.map(category => 
                                <div className={`${styles.categoryItem} ${styles.categoryItemDefault}`} key={category.id}>
                                    <div className={styles.categoryTextDefault}>{category.title}</div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className={styles.products}>
                        {
                            products.map((product) => <ProductsCard key={product.id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
