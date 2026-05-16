import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function createProduct(title, description, price, img1, img2, img3, img4, img5, img6, img7, img8, productLink) {
    try {
        await addDoc(collection(db, "products"), {
            title, description, price, img1, img2, img3, img4, img5, img6, img7, img8, productLink,
            createdAt: new Date()
        });

        return { status: 200, message: "Продуктът е създаден успешно!" };
    } catch (error) {
        console.error("Грешка при създаване на продукта: ", error.message);

        if (error.message.includes("invalid") || error.message.includes("missing")) {
            return { status: 400, message: error.message };
        }

        return { status: 500, message: "Възникна вътрешна грешка!" };
    }
}