import styles from './CatalogPage.module.css';
import { Search } from '../../components/Search/Search'
import { useState } from 'react';
import { Sort } from '../../components/Sort/Sort';
import { Filters } from '../../Filters/Filters';
import { Catalog } from '../../components/Catalog/Catalog';

export function CatalogPage() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    return (
        <div className="container">
            <div className={styles.page}>

                <div className={styles.toolbar}>

                    <Search value={search} onChange={setSearch} />

                    <Sort value={sort} onChange={setSort} />

                </div>


                <div className={styles.content}>
                    <div className={styles.sidebar}>
                        <div className={styles.sidebarTitle}>Категории</div>
                        <Filters
                            selectedId={selectedCategoryId}
                            onSelect={setSelectedCategoryId}
                        />

                    </div>


                    <Catalog
                        search={search}
                        categoryId={selectedCategoryId}
                        sort={sort}
                    />
                </div>
            </div>
        </div>
    );
}
