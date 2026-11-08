import styles from './Sort.module.css';

export function Sort({ value, onChange }) {
    return (
        <div className={styles.sortBox}>
            <select 
            className={styles.sortSelect}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            >
                <option value="">По умолчанию</option>
                <option value="desc">Цена: по убыванию</option>
                <option value="asc">Цена: по возрастанию</option>
            </select>
        </div>
    );
}