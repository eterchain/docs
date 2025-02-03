<?php
$servername = "127.0.0.1:3306";
$username = "eterchain_admin";
$password = "**eterchain_password";
$database = "eterchain_db";

try {
    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_errno) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
