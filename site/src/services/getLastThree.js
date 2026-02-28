import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getLastThree = async () => {
    const q = query(
        collection(db, "products"),
        orderBy("createdAt", "desc"),
        limit(3)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};