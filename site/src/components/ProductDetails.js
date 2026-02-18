import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { isAdmin } from '../services/isAdmin';
import { getProductById } from "../services/getProductById";

export default function ProductDetails() {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        getProductById(id)
            .then(res => {
                setProduct(res);
            })
            .catch(e => {
                console.log(e);
            })
    }, [id]);

    // ✅ IMPORTANT FIX
    if (!product) {
        return <div className="text-center my-5">Зареждане...</div>;
    }

    const loggedAdmin = (
        <>
            <Link to='/' className="btn btn-dark btn-lg w-100" style={{ marginTop: "10px" }}>
                Редактирай
            </Link>

            <Link to='/' className="btn btn-dark btn-lg w-100" style={{ marginTop: "10px" }}>
                Изтрий
            </Link>
        </>
    );

    return (
        <section className="container my-5">
            <div className="row align-items-center">

                <div className="col-lg-6 mb-4">
                    <div className="text-center">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow p-4 border-0">

                        <h2 className="mb-3">{product.title}</h2>

                        <p className="text-muted mb-4">
                            {product.description}
                        </p>

                        <h3 className="mb-4 text-dark">
                            {product.price}€
                        </h3>

                        <button className="btn btn-dark btn-lg w-100">
                            Добави в количката
                        </button>

                        {isAdmin(user.email) ? loggedAdmin : ""}
                    </div>
                </div>

            </div>
        </section>
    );
}
