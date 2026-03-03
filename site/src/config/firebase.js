import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, setAnalyticsCollectionEnabled } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBG01ClimGx7yQlcOj30-SbcjPm4lgw2tQ",
    authDomain: "language-resources-62f41.firebaseapp.com",
    projectId: "language-resources-62f41",
    storageBucket: "language-resources-62f41.firebasestorage.app",
    messagingSenderId: "502853555911",
    appId: "1:502853555911:web:f6005414b3568531c450e2",
    measurementId: "G-FJT6X96KDN"
};

const app = initializeApp(firebaseConfig);

// 1. Инициализираме анализите
const analytics = getAnalytics(app);

// 2. Изключваме събирането на данни по подразбиране (GDPR compliance)
setAnalyticsCollectionEnabled(analytics, false);

// 3. Функция за проверка на съгласието чрез глобалния обект window
const handleCookieConsent = () => {
    if (typeof window.Cookiebot !== 'undefined' && window.Cookiebot.consent && window.Cookiebot.consent.statistics) {
        setAnalyticsCollectionEnabled(analytics, true);
        console.log("Firebase Analytics activated: User granted consent for statistics.");
    } else {
        setAnalyticsCollectionEnabled(analytics, false);
        console.log("Firebase Analytics deactivated: No consent for statistics.");
    }
};

// 4. Слушаме за събития от банера на Cookiebot
window.addEventListener('CookiebotOnAccept', handleCookieConsent);
window.addEventListener('CookiebotOnDecline', handleCookieConsent);

// 5. Проверка при първоначално зареждане (ако потребителят вече е направил избор преди)
if (typeof window.Cookiebot !== 'undefined' && window.Cookiebot.hasResponse) {
    handleCookieConsent();
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export { analytics };