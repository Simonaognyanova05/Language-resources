// services/register.js
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function register(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const freeMaterial = {
            title: "Тест за идентифициране на проблематични области в ученето на чужд език (Безплатен ресурс)",
            price: 0,
            purchasedAt: new Date(), // Може и с Timestamp.now()
            fileUrl: "https://drive.google.com/file/d/1jCo9wjRRjnHujdWB9WtYOauPbLLs5ElI/view?usp=sharing"
        };

        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            purchasedMaterials: [freeMaterial],
        });

        return user; // Връщаме чистия потребител при успех
    } catch (error) {
        console.error("Error during registration:", error);
        // ВАЖНО: Хвърляме грешката нагоре, за да влезе в catch блока на компонента
        throw error;
    }
}