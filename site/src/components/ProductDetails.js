import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getProductById(id)
            .then(res => setProduct(res))
            .catch(e => console.log(e));
    }, [id]);

    if (!product) {
        return <div className="text-center my-5">Зареждане...</div>;
    }

    const images = product.images?.length
        ? product.images
        : [product.img1, product.img2, product.img3, product.img4, product.img5, product.img6, product.img7, product.img8].filter(Boolean);

    const prev = () => setIndex(i => i === 0 ? images.length - 1 : i - 1);
    const next = () => setIndex(i => i === images.length - 1 ? 0 : i + 1);

    const handleDelete = async (id) => {

        if (!window.confirm("Сигурни ли сте?")) return;

        try {
            await deleteDoc(doc(db, "products", id));
            navigate("/products");
        } catch (error) {
            console.error(error);
            alert("Грешка при изтриване");
        }
    };

    const handleAddToCart = async () => {

        if (!user) {
            alert("Трябва да сте логнати!");
            return;
        }

        try {

            const cartRef = doc(db, "users", user.uid, "cart", product.id);
            const existing = await getDoc(cartRef);

            if (existing.exists()) {

                await setDoc(cartRef, {
                    ...product,
                    quantity: existing.data().quantity + 1,
                    addedAt: new Date()
                });

            } else {

                await setDoc(cartRef, {
                    ...product,
                    quantity: 1,
                    addedAt: new Date()
                });

            }

            alert("Добавено в количката!");

        } catch (error) {

            console.error(error);
            alert("Грешка!");

        }
    };

    return (
        <>
            <Helmet>
                <title>Подробности | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href={`{https://language-center-varna.eu/${id}}`} />
            </Helmet>

            <section className="py-5" style={{ background: "#f8f9fa" }}>

                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* IMAGE */}
                        <div className="col-lg-6">

                            <div className="bg-white p-4 rounded-4 shadow-sm text-center"
                                style={{
                                    position: "relative",
                                    height: "460px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>

                                {images.length > 0 && (

                                    <img
                                        src={images[index]}
                                        alt={product.title}
                                        style={{
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                            objectFit: "contain"
                                        }}
                                    />

                                )}

                                {images.length > 1 && (
                                    <>
                                        <button onClick={prev} style={arrowStyle("left")}>‹</button>
                                        <button onClick={next} style={arrowStyle("right")}>›</button>
                                    </>
                                )}

                            </div>

                        </div>

                        {/* DETAILS */}
                        <div className="col-lg-6">
                            <div className="bg-white p-5 rounded-4 shadow-sm" style={{
                                position: "relative",
                                overflow: "hidden",
                                // Правим фоновите линии (notebook style)
                                backgroundImage: "radial-gradient(#d1d1d1 1px, transparent 1px), linear-gradient(#f1f1f1 1px, transparent 1px)",
                                backgroundSize: "20px 20px, 100% 30px",
                                backgroundColor: "#fff"
                            }}>

                                {/* Декорация: Химикал (Emoji или Икона) */}
                                <span style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "20px",
                                    fontSize: "2rem",
                                    transform: "rotate(15deg)",
                                    opacity: "0.6"
                                }}>🖋️</span>

                                {/* Декорация: Линийка */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "20px",
                                    fontSize: "1.5rem",
                                    transform: "rotate(-5deg)",
                                    opacity: "0.4",
                                    letterSpacing: "2px"
                                }}>📏━━━━━━</div>

                                {/* Съдържанието на кутията */}
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <h2 className="fw-bold mb-3 fs-4" style={{ color: "#333" }}>
                                        {product.title}
                                    </h2>

                                    <p className="text-muted mb-4" style={{
                                        lineHeight: "1.8",
                                        minHeight: "100px",
                                        fontWeight: "500"
                                    }}>
                                        {product.description}
                                    </p>

                                    <h3
                                        className="fw-bold mb-4"
                                        style={{
                                            background: "linear-gradient(135deg,#B21F7A,#6A1B9A)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent"
                                        }}
                                    >
                                        {Number(product.price).toFixed(2)}€/{Number(product.price * 1.95).toFixed(2)} лв.
                                    </h3>

                                    <button
                                        className="btn w-100 py-3 mb-3 shadow-sm"
                                        onClick={handleAddToCart}
                                        style={{
                                            background: "linear-gradient(135deg,#B21F7A,#6A1B9A)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "50px",
                                            fontWeight: "600",
                                            transition: "transform 0.2s"
                                        }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        Добави в количката
                                    </button>

                                    {user && isAdmin(user.email) && (
                                        <div className="d-grid gap-2 mt-4">
                                            <Link to={`/editProduct/${id}`} className="btn btn-sm btn-outline-dark rounded-pill">
                                                Редактирай
                                            </Link>
                                            <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={() => handleDelete(id)}>
                                                Изтрий
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

const arrowStyle = (side) => ({
    position: "absolute",
    top: "50%",
    [side]: "15px",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.45)",
    border: "none",
    color: "white",
    fontSize: "26px",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    cursor: "pointer"
});
