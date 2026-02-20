import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: ""
    });

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

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert("Количката е празна.");
            return;
        }

        try {
            setLoading(true);

            const orderNumber = Date.now();

            // 1️⃣ Запис на поръчка
            await addDoc(collection(db, "orders"), {
                userId: user.uid,
                orderNumber,
                customer: formData,
                items: cartItems,
                total: totalPrice,
                status: "pending",
                createdAt: serverTimestamp()
            });

            // 2️⃣ Изчистване на количката
            const deletePromises = cartItems.map((item) =>
                deleteDoc(doc(db, "users", user.uid, "cart", item.id))
            );

            await Promise.all(deletePromises);

            alert("Поръчката е успешно заявена!");
            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Възникна грешка.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Завършване на поръчката</h2>

            <div className="row">

                {/* FORM */}
                <div className="col-lg-7 mb-4">
                    <div className="card shadow border-0 p-4">
                        <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Име"
                                        className="form-control"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Фамилия"
                                        className="form-control"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="Имейл"
                                className="form-control mb-3"
                                required
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                className="form-control mb-3"
                                required
                                onChange={handleChange}
                            />

                            <textarea
                                name="notes"
                                placeholder="Бележки"
                                className="form-control mb-3"
                                rows="3"
                                onChange={handleChange}
                            ></textarea>

                            <button
                                className="btn btn-dark btn-lg w-100"
                                disabled={loading}
                            >
                                {loading ? "Обработва се..." : "Заяви поръчката"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* SUMMARY */}
                <div className="col-lg-5">
                    <div className="card shadow border-0 p-4 mb-4">
                        <h5>Общо</h5>
                        <h3>{totalPrice.toFixed(2)}€</h3>
                    </div>

                    <div className="card shadow border-0 p-4 bg-light">
                        <h5>Банкова информация</h5>
                        <p><strong>Банка:</strong> Example Bank</p>
                        <p><strong>IBAN:</strong> BG00 XXXX 0000 0000 0000</p>
                        <p><strong>BIC:</strong> XXXXXXXX</p>
                        <p><strong>Основание:</strong> Номер на поръчка</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
