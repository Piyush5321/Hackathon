import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

document.getElementById("alertForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const landmark = document.getElementById("landmark").value;
    const category = document.getElementById("category").value;
    const details = document.getElementById("details").value;

    try {
        await addDoc(collection(db, "alerts"), {
            location: location,
            landmark: landmark,
            category: category,
            details: details,
            time: Date.now()
        });

        document.getElementById("msg").innerText = "✅ Alert submitted successfully!";
        document.getElementById("alertForm").reset();

    } catch (err) {
        alert(err.message);
    }
});
