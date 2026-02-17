import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
import ProductItem from "./ProductItem";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {
                console.log("PRODUCTS:", res);
                setProducts(res);
            })
            .catch(e => {
                console.log(e);
            })
    }, [products]);

    return (
        <section class="fruit_section layout_padding">
            <div class="container">
                <div class="heading_container">
                    <hr />
                    <h2>
                        Fresh Fruit
                    </h2>
                </div>
            </div>
            <div class="container-fluid">

                <div class="fruit_container">
                    {products.length > 0
                        ? products.map(x => (<ProductItem product={x} />))
                        : 'Няма създадени стаи'}
                </div>
            </div>
        </section>
    );
}