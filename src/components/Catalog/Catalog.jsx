import { useState } from 'react';
import { ProductsCard } from '../Products/ProductsCard/ProductsCard';
import styles from './Catalog.module.css';
import { useEffect } from 'react';

export function Catalog({ search, categoryId, sort }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async function load() {

            try {
                const prodRes = await fetch('http://localhost:3000/products');
                if (!prodRes.ok) {
                    throw new Error(`Ошибка ${prodRes.status}: ${prodRes.statusText}`);
                }
                const productsFromServer = await prodRes.json();
                setProducts(productsFromServer);
            } catch (error) {
                setError(error.message);
            }

        })();
    }, []);
    const filteredProduct = products.filter((p) =>
        p.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
    )
        .filter(p => p.categoryId === categoryId || categoryId === null);

    const sorting = (products) => {
        if (!sort) return products;
        return [...products].sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price)
    }
    if (error) {
        return <p>Не удалось загрузить товары</p>;
    }

    if (filteredProduct.length === 0) {
        return <p>Товары не найдены</p>
    }
    return (
        <div className={styles.products}>
            {
                sorting(filteredProduct).map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))

            }
        </div>
    );
}