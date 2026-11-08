import styles from './Banner.module.css';
import bannerImg from '../../assets/bannerImg.png';
import { PATH } from '../../routing/Routing';
import { Link } from 'react-router';

export function Banner() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContainer}>

                    <div className={styles.heroContent}>
                        <span className={styles.heroTagline}>КОЛЛЕКЦИЯ ДЛЯ ТЁПЛЫХ ДНЕЙ ДОМА</span>
                        <h2 className={styles.heroTitle}>Уют — в простых вещах.</h2>
                        <p className={styles.heroDescription}>
                            Тактильный текстиль, любимая чашка и детали, которые делают дом вашим.
                        </p>
                        <Link to={PATH.Catalog} className={styles.heroButton}>
                            Перейти в каталог
                        </Link>
                    </div>

                    <div className={styles.heroImageWrapper}>
                        <img
                            src={bannerImg}
                            alt="Уютный интерьер"
                            className={styles.heroImage}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
