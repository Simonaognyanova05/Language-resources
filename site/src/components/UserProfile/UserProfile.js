import './UserProfile.css';
import { Helmet } from "react-helmet";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function UserProfile() {

    const { user } = useAuth();
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const load = async () => {
            if (!user?.uid) return;

            const ref = doc(db, "users", user.uid);
            const snap = await getDoc(ref);

            if (snap.exists()) {

                const allMaterials = snap.data().purchasedMaterials || [];

                const activeMaterials = allMaterials.filter(m => {

                    // ако няма expiresAt → постоянен продукт
                    if (!m.expiresAt) return true;

                    // Firestore Timestamp
                    if (m.expiresAt?.seconds) {
                        return new Date(m.expiresAt.seconds * 1000) > new Date();
                    }

                    // ако е записан като normal Date
                    return new Date(m.expiresAt) > new Date();
                });

                setMaterials(activeMaterials);
            }
        };

        load();
    }, [user]);

    const hasFreeGift = materials.some(m => m.price === 0);

    return (
        <>
            <Helmet>
                <title>Потребителски профил | Електронни ресурси за сваляне</title>
                <meta name="description" content="Това е описанието на моя сайт, което ще се появи в резултатите на Google." />
                <link rel="canonical" href="https://language-center-varna.eu/userProfile" />
            </Helmet>

            <section className="container my-5">
                <div className="row g-4">

                    {/* Profile Card */}
                    <div className="col-lg-4 mb-4">
                        <div className="card shadow h-100">
                            <div className="card-body text-center">

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkiquKWc0Q-azWDo6NyC2kqMYHDRweJ3Chg&s"
                                    alt="Profile"
                                    className="rounded-circle img-fluid mb-3"
                                />

                                <h4>{user?.email}</h4>

                            </div>
                        </div>
                    </div>


                    {/* Purchased Materials */}
                    <div className="col-12 col-lg-8">
                        <div className="card shadow position-relative marketing-card">
                            <div className="card-body position-relative">

                                <h5 className="mb-3 fw-bold text-center text-lg-start">
                                    Закупени файлове
                                </h5>

                                {hasFreeGift && (
                                    <div
                                        className="mb-4 p-3 rounded-4"
                                        style={{
                                            backgroundColor: "#fff4e6",
                                            borderLeft: "4px solid #ff7a00"
                                        }}
                                    >
                                        <p
                                            className="mb-0 small"
                                            style={{
                                                color: "#cc5500",
                                                fontWeight: "600"
                                            }}
                                        >
                                            Благодарим ви за регистрацията и готовността за покупки!
                                            <br /> Приемете първият файл в листата ви като комплимент от екипа ни!
                                        </p>
                                    </div>
                                )}

                                <div className="table-responsive">
                                    <table className="table align-middle mb-0">
                                        <thead>
                                            <tr>
                                                <th>Име</th>
                                                <th className="d-none d-md-table-cell">Дата</th>
                                                <th>Цена</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {materials.length === 0 && (
                                                <tr>
                                                    <td colSpan="4" className="text-center text-muted small">
                                                        Няма закупени материали
                                                    </td>
                                                </tr>
                                            )}

                                            {materials.map((m, i) => (
                                                <tr key={i}>
                                                    <td className="fw-semibold small">
                                                        {m.title}
                                                    </td>

                                                    <td className="small d-none d-md-table-cell">
                                                        {m.purchasedAt?.seconds
                                                            ? new Date(m.purchasedAt.seconds * 1000).toLocaleDateString()
                                                            : "-"
                                                        }
                                                    </td>

                                                    <td className="small">
                                                        {m.price === 0
                                                            ? <span style={{ color: "#ff7a00", fontWeight: "700" }}>Безплатно</span>
                                                            : `${m.price} €`
                                                        }
                                                    </td>

                                                    <td>
                                                        {m.fileUrl && (
                                                            <a
                                                                href={m.fileUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="btn btn-sm rounded-pill px-3 download-btn"
                                                            >
                                                                Изтегли
                                                            </a>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}