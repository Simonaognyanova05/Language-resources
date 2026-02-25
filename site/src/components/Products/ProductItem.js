import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div
                className="card border-0 shadow h-100 product-card"
                style={{
                    transition: "0.3s ease",
                    borderRadius: "15px",
                    overflow: "hidden"
                }}
            >
                <img
                    src={product.img1}
                    alt={product.title}
                    className="card-img-top"
                    style={{
                        height: "220px",
                        objectFit: "contain",
                        backgroundColor: "#f8f9fa"
                    }}
                />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>

                    {product.price && (
                        <p className="fw-bold mb-3">
                            {product.price}€
                        </p>
                    )}

                    <Link
                        to={`/product/${product.id}`}
                        className="btn mt-auto"
                        style={{
                            background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                            color: "white",
                            fontWeight: "500",
                            borderRadius: "8px"
                        }}
                    >
                        Разгледай
                    </Link>
                </div>
            </div>
        </div>
    );
}