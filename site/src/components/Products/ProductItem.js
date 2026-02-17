import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
    return (
        <div class="box">
            <img src={product.img} alt="" />
            <div class="link_box">
                <h5>
                    {product.title}
                </h5>
                <Link to={`/product/${product.productLink}`}>
                    Buy Now
                </Link>
            </div>
        </div>
    );
}