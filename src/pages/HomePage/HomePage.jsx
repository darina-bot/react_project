import { Banner } from "../../components/Banner/Banner.jsx";
import { Categories } from "../../components/Сategories/Categories.jsx";
import { Products } from "../../components/Products/Products.jsx";
import { Subscribe } from "../../components/Subscribe/Subscribe.jsx";

export function HomePage() {
    return (
        <>
            <Banner />
            <Categories />
            <Products />
            <Subscribe />
        </>
    )
}