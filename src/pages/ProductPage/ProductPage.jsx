import styles from './ProductPage.module.css'
import cardImg from '../../assets/cardImg.png'
import { useParams } from 'react-router';
import { categories, products } from '../../../dist/assets/data';

export function ProductPage() {
   const {id} = useParams();
    const product = products.find(product => product.id == id);
    const category = categories.find(category => category.id == product.categoryId);
  return (
    
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <img
              className={styles.image}
              src={cardImg}
              alt="Кружка «Утро»"
            />
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.title}>Кружка «Утро»</div>
              <div className={styles.description}>
                Для первого кофе, тёплого чая и минут наедине с собой. Матовая
                керамика приятно лежит в ладонях, а спокойный молочный оттенок
                сочетается с любой посудой.
              </div>
            </div>

            <div className={styles.price}>890 ₽</div>

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