import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzd84CEjLpGAz9KK4UX1QjwRwCXYqdNng",
    authDomain: "navio-alert.firebaseapp.com",
    projectId: "navio-alert",
    storageBucket: "navio-alert.firebasestorage.app",
    messagingSenderId: "816574053374",
    appId: "1:816574053374:web:960c3115ae577533ed5eaf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
