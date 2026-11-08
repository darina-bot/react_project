import styles from './Search.module.css';
import SearchImg from '../../assets/search.png'

export function Search({ value, onChange }) {
    return (
        <div className={styles.searchBox}>
            <div className={styles.searchIcon}>
                <img src={SearchImg} alt="" className={styles.searchIconInner} />
            </div>
            <input 
            type="search" 
            className={styles.searchInput} 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Поиск по товарам: плед, кружка, ваза…" 
            />
        </div>
    );
}