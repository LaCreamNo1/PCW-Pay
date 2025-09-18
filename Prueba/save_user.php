<?php
$servername = "localhost";
$username   = "root";     // tu usuario de MySQL
$password   = "1234";     // tu contraseña
$dbname     = "mi_base";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$name  = $_POST['name'];
$email = $_POST['email'];

// Preparar y ejecutar query
$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $email);

if ($stmt->execute()) {
    echo "Usuario guardado correctamente ✅";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
