<?php
include "db.php";

$username = $_POST['username'];
$password = $_POST['password'];

if(empty($username) || empty($password)){
    die("All fields required");
}

$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();

    if (password_verify($password, $row['password'])) {
        echo "Login successful 🎉";
    } else {
        echo "Wrong password";
    }

} else {
    echo "User not found";
}
?>
