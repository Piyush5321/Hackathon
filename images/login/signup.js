import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;

    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", userCred.user.uid), {
            username: username,
            phone: phone,
            email: email
        });

        alert("Signup successful");
        window.location.href = "login.html";

    } catch (err) {
        alert(err.message);
    }
});
