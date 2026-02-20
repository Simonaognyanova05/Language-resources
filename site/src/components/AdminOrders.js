import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const q = query(
                collection(db, "orders"),
                orderBy("createdAt", "desc")
            );

            const querySnapshot = await getDocs(q);

            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });

            setOrders(items);
        };

        fetchOrders();
    }, []);

    const changeStatus = async (orderId, newStatus) => {
        const ref = doc(db, "orders", orderId);

        await updateDoc(ref, {
            status: newStatus,
        });

        setOrders((prev) =>
            prev.map((order) =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <section className="container my-5">
            <h2 className="mb-4 text-center">Админ – Поръчки</h2>

            {orders.length === 0 ? (
                <p className="text-center text-muted">
                    Няма поръчки.
                </p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="card shadow border-0 p-4 mb-4">

                        {/* Header */}
                        <div className="d-flex justify-content-between flex-wrap">
                            <div>
                                <h5>Поръчка #{order.orderNumber}</h5>
                                <small className="text-muted">
                                    {order.createdAt?.toDate().toLocaleString()}
                                </small>
                            </div>

                            <div>
                                <span className={`badge bg-${order.status === "pending"
                                    ? "warning"
                                    : order.status === "paid"
                                        ? "success"
                                        : "primary"
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                        </div>

                        <hr />

                        {/* Customer Info */}
                        <div className="mb-3">
                            <strong>Клиент:</strong> {order.customer.firstName} {order.customer.lastName} <br />
                            <strong>Имейл:</strong> {order.customer.email} <br />
                            <strong>Телефон:</strong> {order.customer.phone} <br />
                        </div>

                        {/* Products */}
                        <div className="mb-3">
                            <strong>Продукти:</strong>

                            {order.items.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between border-bottom py-1">
                                    <span>{item.title} x {item.quantity}</span>
                                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h5>Общо:</h5>
                            <h5>{order.total.toFixed(2)}€</h5>
                        </div>

                        {/* Status Buttons */}
                        <div className="mt-3 d-flex gap-2 flex-wrap">
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => changeStatus(order.id, "pending")}
                            >
                                Pending
                            </button>

                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => changeStatus(order.id, "paid")}
                            >
                                Paid
                            </button>

                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => changeStatus(order.id, "shipped")}
                            >
                                Shipped
                            </button>
                        </div>

                    </div>
                ))
            )}
        </section>
    );
}
