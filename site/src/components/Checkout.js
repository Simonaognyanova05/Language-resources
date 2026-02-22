import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
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

            await addDoc(collection(db, "orders"), {
                userId: user.uid,
                orderNumber,
                customer: formData,
                items: cartItems,
                total: totalPrice,
                status: "pending",
                createdAt: serverTimestamp()
            });

            // 📧 Email Notification
            await emailjs.send(
                "service_ce5rn9m",
                "template_lo5z0wo",
                {
                    orderNumber,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    total: totalPrice.toFixed(2),
                    to_email: "pointsmart909@gmail.com"
                },
                "NL354V9ZykEYwGYmA"
            );
            // Clear cart
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
        <section className="py-5" style={{ background: "#f8f9fa" }}>
            <div className="container">
                <h2 className="text-center fw-bold mb-5">
                    Завършване на поръчката
                </h2>

                <div className="row g-5">

                    {/* FORM */}
                    <div className="col-lg-7">
                        <div className="bg-white p-5 rounded-4 shadow-sm">

                            <h5 className="fw-semibold mb-4">
                                Данни за клиента
                            </h5>

                            <form onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Име"
                                            className="form-control rounded-pill p-3"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Фамилия"
                                            className="form-control rounded-pill p-3"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Имейл"
                                    className="form-control rounded-pill p-3 mb-3"
                                    required
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    className="form-control rounded-pill p-3 mb-3"
                                    required
                                    onChange={handleChange}
                                />

                                <textarea
                                    name="notes"
                                    placeholder="Бележки към поръчката"
                                    className="form-control rounded-4 p-3 mb-4"
                                    rows="3"
                                    onChange={handleChange}
                                ></textarea>

                                <button
                                    className="btn w-100 py-3"
                                    disabled={loading}
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
                                    {loading ? "Обработва се..." : "Заяви поръчката"}
                                </button>

                            </form>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="col-lg-5">

                        {/* TOTAL CARD */}
                        <div className="bg-white p-5 rounded-4 shadow-sm mb-4"
                            style={{ top: "100px" }}>

                            <h5 className="fw-semibold mb-4">
                                Обобщение
                            </h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span>Междинна сума:</span>
                                <span>{totalPrice.toFixed(2)} €</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <h5 className="fw-bold m-0">Общо:</h5>
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
                        </div>

                        {/* BANK INFO */}
                        <div className="bg-white p-5 rounded-4 shadow-sm">
                            <h6 className="fw-semibold mb-3">
                                Информация за плащане
                            </h6>

                            <div className="small text-muted" style={{ lineHeight: "1.8" }}>
                                <p><strong>Банка:</strong> Example Bank</p>
                                <p><strong>IBAN:</strong> BG00 XXXX 0000 0000 0000</p>
                                <p><strong>BIC:</strong> XXXXXXXX</p>
                                <p><strong>Основание:</strong> Номер на поръчка</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
