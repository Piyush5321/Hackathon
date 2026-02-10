<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "db.php";

/* check if form sent */
if($_SERVER["REQUEST_METHOD"] == "POST"){

    $email    = $_POST['email'] ?? '';
    $phone    = $_POST['phone'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if($email=='' || $phone=='' || $username=='' || $password==''){
        die("Form data missing");
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email,phone,username,password)
            VALUES ('$email','$phone','$username','$hash')";

    if($conn->query($sql)){
        echo "Signup successful <br><a href='login.html'>Go to login</a>";
    }else{
        echo "Database error: " .
