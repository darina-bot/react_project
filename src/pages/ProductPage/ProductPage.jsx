import styles from './ProductPage.module.css'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

export function ProductPage() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async function load() {

      try {
        const res = await fetch('http://localhost:3000/products/' + id);
        if(!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`)
        }
        const product = await res.json();
        setProduct(product);
      } catch (error) {
        setError(error.message);
      }

    })();
  }, [id]);

  if (error) {
    return <p>Не удалось загрузить товар: {error}</p>
  }
  if (!product) {
    return <p>Товар не найден</p>
  }

  return (

    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <img
              className={styles.image}
              src={product.image}
              alt="Кружка «Утро»"
            />
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.title}>{product.title}</div>
              <div className={styles.description}>
                {product.description}
              </div>
            </div>

            <div className={styles.price}>{product.price} ₽</div>

            <div className={styles.actions}>
              <button className={styles.button}>
                <span className={styles.buttonText}>В корзину</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}