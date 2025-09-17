<?php
$host = "localhost";   // Servidor
$user = "root";        // Usuario de MySQL
$pass = "";            // Contraseña
$dbname = "plataforma"; // Nombre de la base de datos

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}
?>
