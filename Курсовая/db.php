<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "medic";
$port = 1488;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>