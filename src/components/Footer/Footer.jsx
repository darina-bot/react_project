import { Link } from 'react-router';
import styles from './Footer.module.css';
import { PATH } from '../../routing/Routing';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerMain}>

                    <div className={styles.logoColumn}>
                        <div className={styles.logo}>тихий дом</div>
                    </div>

                    <nav className={styles.navColumn}>
                        <h3 className={styles.columnTitle}>Магазин</h3>
                        <Link to={PATH.Home} className={styles.columnLink}>Главная</Link>
                        <Link to={PATH.Catalog} className={styles.columnLink}>Каталог</Link>
                        <Link to="/cart" className={styles.columnLink}>Корзина</Link>
                    </nav>

                    <nav className={styles.navColumn}>
                        <h3 className={styles.columnTitle}>Покупателям</h3>
                        <a href="#" className={styles.columnLink}>Доставка и оплата</a>
                        <a href="#" className={styles.columnLink}>Возврат и обмен</a>
                        <a href="#" className={styles.columnLink}>Уход за изделиями</a>
                    </nav>

                    <div className={styles.contactsColumn}>
                        <h3 className={styles.columnTitle}>Мы на связи</h3>
                        <a href="tel:88007002418" className={styles.columnLink}>8 800 700-24-18</a>
                        <a href="mailto:hello@tihiydom.ru" className={styles.columnLink}>hello@tihiydom.ru</a>
                        <span className={styles.workingHours}>Ежедневно, 10:00–20:00</span>
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <span className={styles.copyright}>© 2026 Тихий дом</span>
                    <a href="#" className={styles.privacyLink}>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}
