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

                        <button
                            className="btn btn-dark btn-lg w-100"
                            onClick={handleAddToCart}
                        >
                            Добави в количката
                        </button>

                        {user && isAdmin(user.email) ? loggedAdmin : ""}
                    </div>
                </div>

            </div>
        </section>
    );
}
