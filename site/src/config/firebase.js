import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);