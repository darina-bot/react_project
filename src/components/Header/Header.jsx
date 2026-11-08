import styles from './Header.module.css';
import phone from '../../assets/phone.svg';
import { PATH } from '../../routing/Routing';
import { Link } from 'react-router';

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
            <div className={styles.headerContainer}>

                <div className={styles.headerLogoBlock}>
                    <h1 className={styles.headerTitle}>тихий дом</h1>
                    <span className={styles.headerSubtitle}>ВЕЩИ ДЛЯ ЖИЗНИ</span>
                </div>

                <nav className={styles.headerNav}>
                    <Link to={PATH.Home} className={styles.headerNavLink}>Главная</Link>
                    <Link to={PATH.Catalog} className={styles.headerNavLink}>Каталог</Link>
                    <Link to="/cart" className={styles.headerNavLink}>Корзина</Link>
                </nav>

                <div className={styles.headerContacts}>
                    <img src={phone} alt="phone" className={styles.headerIconPhone} />
                    <a href="tel:88007002418" className={styles.headerPhone}>8 800 700-24-18</a>
                </div>

            </div>
            </div>
        </header>
    );
}

