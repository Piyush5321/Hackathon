document.getElementById("signupForm").addEventListener("submit", function (e) {

    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (pass.length < 6) {
        alert("Password must be at least 6 characters");
        e.preventDefault();
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        e.preventDefault();
        return;
    }
});
