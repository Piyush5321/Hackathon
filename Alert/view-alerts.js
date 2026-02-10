import { db } from "./firebase.js";
import { collection, getDocs, query, orderBy, where }
    from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const list = document.getElementById("alertsList");

// 🔄 Load all alerts
window.loadAlerts = async function () {

    const q = query(collection(db, "alerts"), orderBy("time", "desc"));
    const snap = await getDocs(q);

    list.innerHTML = "";

    snap.forEach(doc => {
        const data = doc.data();

        list.innerHTML += `
      <div style="background:#fff3e0;
      padding:15px;margin-top:15px;border-radius:10px;">
        <b>Location:</b> ${data.location}<br>
        <b>Details:</b> ${data.details}
      </div>
    `;
    });
}

// 🔍 Search by location
window.searchAlerts = async function () {

    const text = document.getElementById("searchInput").value;

    const q = query(collection(db, "alerts"), where("location", "==", text));
    const snap = await getDocs(q);

    list.innerHTML = "";

    if (snap.empty) {
        list.innerHTML = "<p>No alerts found</p>";
        return;
    }

    snap.forEach(doc => {
        const data = doc.data();

        list.innerHTML += `
      <div style="background:#ffe0e0;
      padding:15px;margin-top:15px;border-radius:10px;">
        <b>Location:</b> ${data.location}<br>
        <b>Details:</b> ${data.details}
      </div>
    `;
    });
}

loadAlerts();
