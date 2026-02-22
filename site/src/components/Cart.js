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
        <section className="py-5" style={{ background: "#f8f9fa" }}>
            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    🛒 Моята количка
                </h2>

                {cartItems.length === 0 ? (
                    <div className="text-center text-muted fs-5">
                        Количката е празна.
                    </div>
                ) : (
                    <>
                        <div className="row g-4">

                            {cartItems.map((item) => (
                                <div key={item.id} className="col-12">
                                    <div className="bg-white p-4 rounded-4 shadow-sm">

                                        <div className="row align-items-center">

                                            {/* Image */}
                                            <div className="col-md-2 text-center mb-3 mb-md-0">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="img-fluid rounded-3"
                                                    style={{ maxHeight: "90px", objectFit: "cover" }}
                                                />
                                            </div>

                                            {/* Title & Price */}
                                            <div className="col-md-4">
                                                <h6 className="fw-semibold mb-1">
                                                    {item.title}
                                                </h6>
                                                <small className="text-muted">
                                                    {item.price} €
                                                </small>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="col-md-3 mt-3 mt-md-0">
                                                <div className="d-flex align-items-center justify-content-md-center">

                                                    <button
                                                        className="btn btn-outline-dark rounded-circle"
                                                        style={{ width: "35px", height: "35px" }}
                                                        onClick={() => decreaseQty(item)}
                                                    >
                                                        −
                                                    </button>

                                                    <span className="mx-3 fw-bold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        className="btn btn-outline-dark rounded-circle"
                                                        style={{ width: "35px", height: "35px" }}
                                                        onClick={() => increaseQty(item)}
                                                    >
                                                        +
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Remove */}
                                            <div className="col-md-3 text-md-end mt-3 mt-md-0">
                                                <button
                                                    className="btn btn-outline-danger rounded-pill px-4"
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

                        {/* TOTAL CARD */}
                        <div className="bg-white p-5 rounded-4 shadow-sm mt-5">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="fw-bold m-0">Общо:</h4>

                                <h4
                                    className="fw-bold m-0"
                                    style={{
                                        background: "linear-gradient(135deg, #B21F7A, #6A1B9A)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    {totalPrice.toFixed(2)} €
                                </h4>
                            </div>

                            <button
                                className="btn w-100 py-3"
                                onClick={() => navigate("/checkout")}
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
                                Поръчай
                            </button>

                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
