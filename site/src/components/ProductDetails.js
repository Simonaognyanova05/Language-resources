import { useEffect, useState } from "react";
import { deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { isAdmin } from "../services/isAdmin";
import { getProductById } from "../services/getProductById";

export default function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then(res => setProduct(res))
            .catch(e => console.log(e));
    }, [id]);

    if (!product) {
        return <div className="text-center my-5">Зареждане...</div>;
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Сигурни ли сте, че искате да изтриете този продукт?"
        );

        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "products", id));
            navigate("/products");
        } catch (error) {
            console.error("Delete error:", error);
            alert("Възникна грешка!");
        }
    };

    // 🔥 ADD TO CART (Firestore)
    const handleAddToCart = async () => {
        if (!user) {
            alert("Трябва да сте логнати!");
            return;
        }

        try {
            const cartRef = doc(db, "users", user.uid, "cart", product.id);
            const existing = await getDoc(cartRef);

            if (existing.exists()) {
                const currentQty = existing.data().quantity;

                await setDoc(cartRef, {
                    ...product,
                    quantity: currentQty + 1,
                    addedAt: new Date()
                });
            } else {
                await setDoc(cartRef, {
                    ...product,
                    quantity: 1,
                    addedAt: new Date()
                });
            }

            alert("Продуктът е добавен в количката!");
        } catch (error) {
            console.error("Cart error:", error);
            alert("Грешка при добавяне в количката!");
        }
    };

    const loggedAdmin = (
        <>
            <Link
                to={`/editProduct/${id}`}
                className="btn btn-dark btn-lg w-100"
                style={{ marginTop: "10px" }}
            >
                Редактирай
            </Link>

            <button
                className="btn btn-dark btn-lg w-100"
                style={{ marginTop: "10px" }}
                onClick={() => handleDelete(id)}
            >
                Изтрий
            </button>
        </>
    );

    return (
        <section className="py-5" style={{ background: "#f8f9fa" }}>
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* Image */}
                    <div className="col-lg-6">
                        <div className="bg-white p-4 rounded-4 shadow-sm text-center">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="img-fluid rounded-4"
                                style={{ maxHeight: "450px", objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="col-lg-6">
                        <div className="bg-white p-5 rounded-4 shadow-sm">

                            <h2 className="fw-bold mb-3">
                                {product.title}
                            </h2>

                            <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                                {product.description}
                            </p>

                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h3
                                    className="fw-bold m-0"
                                    style={{
                                        background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    {product.price} €
                                </h3>
                            </div>

                            {/* Add to Cart */}
                            <button
                                className="btn w-100 py-3 mb-3"
                                onClick={handleAddToCart}
                                style={{
                                    background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "50px",
                                    fontWeight: "600",
                                    transition: "0.3s"
                                }}
                                onMouseOver={(e) => e.target.style.opacity = "0.9"}
                                onMouseOut={(e) => e.target.style.opacity = "1"}
                            >
                                Добави в количката
                            </button>

                            {/* Admin Controls */}
                            {user && isAdmin(user.email) && (
                                <div className="d-grid gap-3">

                                    <Link
                                        to={`/editProduct/${id}`}
                                        className="btn btn-outline-dark py-2 rounded-pill"
                                    >
                                        Редактирай
                                    </Link>

                                    <button
                                        className="btn btn-outline-danger py-2 rounded-pill"
                                        onClick={() => handleDelete(id)}
                                    >
                                        Изтрий
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
