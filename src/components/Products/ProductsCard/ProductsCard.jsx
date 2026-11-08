import { useState } from 'react';
import styles from './Products.module.css';
import { Link, useParams } from 'react-router';
import { useEffect } from 'react';

export function ProductsCard({ product }) {
    const [category, setCategory] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch('http://localhost:3000/categories/' + product.categoryId);
                if (!res.ok) {
                    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
                }
                const category = await res.json();
                setCategory(category);
            } catch (error) {
                setError(error.message);
            }
        })();
    }, []);
    if (error) {
        return <p>Не удалось загрузить категорию: {error}</p>
    }
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