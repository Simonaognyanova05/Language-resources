export default function ProductItem({ product }) {
    return (
        <div class="box">
            <img src={product.img} alt="" />
            <div class="link_box">
                <h5>
                    {product.title}
                </h5>
                <a href={product.productLink}>
                    Buy Now
                </a>
            </div>
        </div>
    );
}