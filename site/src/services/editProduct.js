import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function editProduct(id, updatedData) {
    try {
        const productRef = doc(db, "products", id);
        await updateDoc(productRef, {
            ...updatedData,
            updatedAt: new Date()
        });

        return { status: 200, message: "Успешна редакция!" };
    } catch (error) {
        return { status: 500, message: "Грешка при редактиране!" };
    }
}