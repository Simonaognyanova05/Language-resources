import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
    collection,
    getDocs,
    updateDoc,
    doc,
    orderBy,
    query,
    setDoc,
    arrayUnion
} from "firebase/firestore";
import { db } from "../config/firebase";

export default function AdminOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {

            const q = query(
                collection(db, "orders"),
                orderBy("createdAt", "desc")
            );

            const snapshot = await getDocs(q);

            const list = [];
            snapshot.forEach(d => list.push({ id: d.id, ...d.data() }));

            setOrders(list);
        };

        fetchOrders();
    }, []);

    const changeStatus = async (orderId, newStatus, orderData) => {

        const orderRef = doc(db, "orders", orderId);

        await updateDoc(orderRef, { status: newStatus });

        // 👉 ако е платена
        if (newStatus === "paid" && orderData?.userId) {

            const userRef = doc(db, "users", orderData.userId);

            const WEEKLY_PRODUCT_ID = "b0deEclkX5DujxpvWFlR";

            const purchasedItems = orderData.items.map(item => {

                const now = new Date();

                const baseData = {
                    id: item.id || "",
                    title: item.title || "Материал",
                    fileUrl: item.productLink || "",
                    price: Number(item.price) || 0,
                    purchasedAt: now
                };

                // 👉 Само ако е абонаментния продукт
                if (item.id === WEEKLY_PRODUCT_ID) {
                    baseData.expiresAt = new Date(
                        now.getTime() + (7 * 24 * 60 * 60 * 1000)
                    );
                }

                return baseData;
            });

            await setDoc(userRef, {
                purchasedMaterials: arrayUnion(...purchasedItems)
            }, { merge: true });
        }

        setOrders(prev =>
            prev.map(o =>
                o.id === orderId ? { ...o, status: newStatus } : o
            )
        );
    };

    return (
        <>
            <Helmet>
                <title>Поръчки - Админ | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/orders" />
            </Helmet>
            <section className="container my-5">
                <h2 className="mb-4 text-center">Админ – Поръчки</h2>

                {orders.length === 0 ? (
                    <p className="text-center text-muted">Няма поръчки.</p>
                ) : (
                    orders.map(order => (

                        <div key={order.id} className="card shadow border-0 p-4 mb-4">

                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h5>Поръчка #{order.orderNumber}</h5>
                                    <small className="text-muted">
                                        {order.createdAt?.toDate().toLocaleString()}
                                    </small>
                                </div>

                                <span className={`badge bg-${order.status === "pending"
                                    ? "warning"
                                    : order.status === "paid"
                                        ? "success"
                                        : "primary"
                                    }`} style={{ height: "20px" }}>
                                    {order.status}
                                </span>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <strong>Клиент:</strong> {order.customer.firstName} {order.customer.lastName}<br />
                                <strong>Имейл:</strong> {order.customer.email}<br />
                                <strong>Телефон:</strong> {order.customer.phone}
                            </div>

                            <div className="mb-3">
                                <strong>Продукти:</strong>

                                {order.items.map((item, i) => (
                                    <div key={i} className="d-flex justify-content-between border-bottom py-1">
                                        <span>{item.title} x {item.quantity}</span>
                                        <span>{Number(item.price).toFixed(2)}€</span>
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex justify-content-between mt-3">
                                <h5>Общо:</h5>
                                <h5>{Number(order.total).toFixed(2)}€</h5>
                            </div>

                            <div className="mt-3 d-flex gap-2">
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => changeStatus(order.id, "pending", order)}
                                >
                                    Pending
                                </button>

                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => changeStatus(order.id, "paid", order)}
                                >
                                    Paid
                                </button>

                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => changeStatus(order.id, "shipped", order)}
                                >
                                    Shipped
                                </button>
                            </div>

                        </div>
                    ))
                )}
            </section>
        </>
    );
}
