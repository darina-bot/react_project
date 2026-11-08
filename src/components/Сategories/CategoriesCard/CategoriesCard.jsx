import styles from './CategoriesCard.module.css';
import categoryImg from '../../../assets/categoryImg.png';

export function CategoriesCard({category}) {
    return (
        <div className={styles.card}>
            <img
                src={categoryImg}
                alt="img"
                className={styles.cardImage}
            />
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardArrow}>↗</p>

            </div>
            <p className={styles.cardDescription}>Мягкость в каждом прикосновении</p>
        </div>
    )
}
