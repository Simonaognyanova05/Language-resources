import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../contexts/AuthContext";

export default function Cart() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (!user) return;

        const fetchCart = async () => {
            const querySnapshot = await getDocs(
                collection(db, "users", user.uid, "cart")
            );

            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });

            setCartItems(items);
        };

        fetchCart();
    }, [user]);

    const increaseQty = async (item) => {
        const ref = doc(db, "users", user.uid, "cart", item.id);
        await updateDoc(ref, {
            quantity: item.quantity + 1,
        });

        setCartItems((prev) =>
            prev.map((x) =>
                x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
            )
        );
    };

    const decreaseQty = async (item) => {
        if (item.quantity === 1) return;

        const ref = doc(db, "users", user.uid, "cart", item.id);
        await updateDoc(ref, {
            quantity: item.quantity - 1,
        });

        setCartItems((prev) =>
            prev.map((x) =>
                x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
            )
        );
    };

    const removeItem = async (id) => {
        await deleteDoc(doc(db, "users", user.uid, "cart", id));
        setCartItems((prev) => prev.filter((x) => x.id !== id));
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <section className="container my-5">
            <h2 className="mb-4 text-center">🛒 Моята количка</h2>

            {cartItems.length === 0 ? (
                <div className="text-center text-muted">
                    Количката е празна.
                </div>
            ) : (
                <>
                    <div className="row">
                        {cartItems.map((item) => (
                            <div key={item.id} className="col-12 mb-4">
                                <div className="card shadow-sm border-0 p-3">
                                    <div className="row align-items-center">

                                        {/* Image */}
                                        <div className="col-4 col-md-2 text-center">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="img-fluid rounded"
                                                style={{ maxHeight: "80px" }}
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="col-8 col-md-4">
                                            <h6 className="mb-1">{item.title}</h6>
                                            <small className="text-muted">
                                                {item.price}€
                                            </small>
                                        </div>

                                        {/* Quantity */}
                                        <div className="col-6 col-md-3 mt-3 mt-md-0">
                                            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
                                                <button
                                                    className="btn btn-outline-dark btn-sm"
                                                    onClick={() => decreaseQty(item)}
                                                >
                                                    -
                                                </button>

                                                <span className="mx-3">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    className="btn btn-outline-dark btn-sm"
                                                    onClick={() => increaseQty(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Remove */}
                                        <div className="col-6 col-md-3 text-end mt-3 mt-md-0">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Премахни
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Section */}
                    <div className="card shadow border-0 p-4 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Общо:</h4>
                            <h4>{totalPrice.toFixed(2)}€</h4>
                        </div>

                        <button
                            className="btn btn-dark btn-lg w-100 mt-3"
                            onClick={() => navigate("/checkout")}
                        >
                            Поръчай
                        </button>

                    </div>
                </>
            )}
        </section>
    );
}
