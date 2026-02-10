/* LOGIN VALIDATION */
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {

        let valid = true;

        let user = document.getElementById("loginUser").value.trim();
        let pass = document.getElementById("loginPass").value.trim();

        document.getElementById("loginUserError").innerText = "";
        document.getElementById("loginPassError").innerText = "";

        if (user === "") {
            document.getElementById("loginUserError").innerText = "Username required";
            valid = false;
        }

        if (pass === "") {
            document.getElementById("loginPassError").innerText = "Password required";
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
}


/* SIGNUP VALIDATION */
let form = document.getElementById("signupForm");

if (form) {
    form.addEventListener("submit", function (e) {

        let valid = true;

        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let user = document.getElementById("username").value.trim();
        let pass = document.getElementById("password").value;
        let confirm = document.getElementById("confirm").value;

        document.querySelectorAll(".error").forEach(el => el.innerText = "");


        /* EMAIL */
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            document.getElementById("emailError").innerText = "Enter valid email";
            valid = false;
        }

        /* PHONE */
        let phonePattern = /^[0-9]{10}$/;
        if (!phone.match(phonePattern)) {
            document.getElementById("phoneError").innerText = "Enter 10 digit phone";
            valid = false;
        }

        /* USERNAME */
        if (user.length < 3) {
            document.getElementById("userError").innerText = "Min 3 characters";
            valid = false;
        }

        /* PASSWORD */
        if (pass.length < 6) {
            document.getElementById("passError").innerText = "Min 6 characters";
            valid = false;
        }

        /* CONFIRM */
        if (pass !== confirm) {
            document.getElementById("confirmError").innerText = "Passwords not match";
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
}
