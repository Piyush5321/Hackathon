import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDkm1E43Pbf0tXAFP8yeHCwD_KdtAbPB1E",
    authDomain: "navio-login.firebaseapp.com",
    projectId: "navio-login",
    storageBucket: "navio-login.firebasestorage.app",
    messagingSenderId: "1073572668385",
    appId: "1:1073572668385:web:c7109d4e7b5591546d28a0"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
