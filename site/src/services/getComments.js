import { db } from '../config/firebase';
import { collection, query, limit, getDocs } from 'firebase/firestore';

export async function getComments() {
    try {
        const q = query(
            collection(db, "comments"),
            limit(20)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Грешка при извличане на коментари:", error);
        return [];
    }
}