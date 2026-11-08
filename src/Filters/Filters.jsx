import { useState } from 'react';
import styles from './Filters.module.css';
import { useEffect } from 'react';

export function Filters({ selectedId, onSelect }) {
    const [categories, setCategories] = useState([]);
     const [error, setError] = useState(null);
    useEffect(() => {
        (async function load() {

            try {
                 const catRes = await fetch('http://localhost:3000/categories');
                if (!catRes.ok) {
                    throw new Error(`Ошибка ${catRes.status}: ${catRes.statusText}`);
                }
                const categoriesFromServer = await catRes.json();
                setCategories(categoriesFromServer);
            } catch (error) {
                setError(error.message);
            }

        })();
    }, []);
    return (
        <div className={styles.categoryList}>
            
                <button
                    type="button"
                    className={selectedId === null ? `${styles.categoryItem}  ${styles.categoryItemActive}  ${styles.categoryTextActive}` : `${styles.categoryItem} ${styles.categoryTextDefault}  ${styles.categoryItemDefault}`}
                    onClick={() => onSelect(null)}
                >
                    Все товары
                </button>
        
            {
                categories.map((category) =>
                    <button
                        key={category.id}
                        type="button"
                        className={
                            selectedId === category.id ? `${styles.categoryItem}  ${styles.categoryItemActive}  ${styles.categoryTextActive}` : `${styles.categoryItem} ${styles.categoryTextDefault}  ${styles.categoryItemDefault}`
                        }
                        onClick={() => onSelect(category.id)}
                    >
                        {category.title}
                    </button>)
            }
        </div>
    );
}