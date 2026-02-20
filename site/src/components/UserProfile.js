import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function UserProfile() {

    const { user } = useAuth();
    const [materials, setMaterials] = useState([]);

    useEffect(() => {

        const load = async () => {

            if (!user?.uid) return;

            const ref = doc(db, "users", user.uid);
            const snap = await getDoc(ref);

            if (snap.exists()) {
                setMaterials(snap.data().purchasedMaterials || []);
            }
        };

        load();

    }, [user]);

    return (
        <section className="container my-5">
            <div className="row">

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

                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-body">

                            <h4 className="mb-4">Закупени файлове</h4>

                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th>Име</th>
                                        <th>Дата</th>
                                        <th>Цена</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {materials.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="text-center text-muted">
                                                Няма закупени материали
                                            </td>
                                        </tr>
                                    )}

                                    {materials.map((m, i) => (
                                        <tr key={i}>

                                            <td>{m.title}</td>

                                            <td>
                                                {m.purchasedAt?.seconds
                                                    ? new Date(m.purchasedAt.seconds * 1000).toLocaleDateString()
                                                    : "-"
                                                }
                                            </td>

                                            <td>{m.price} €</td>

                                            <td>
                                                {m.fileUrl && (
                                                    <a
                                                        href={m.fileUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="btn btn-dark btn-sm"
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
        </section>
    );
}
