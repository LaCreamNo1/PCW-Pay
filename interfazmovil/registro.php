<?php include("db.php"); ?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Registro - Platform Card Wallet</title>
</head>
<body>
  <h2>Crear cuenta</h2>
  <form method="POST">
    <input type="text" name="nombre" placeholder="Nombre completo" required><br><br>
    <input type="email" name="correo" placeholder="Correo electrónico" required><br><br>
    <input type="password" name="clave" placeholder="Contraseña" required><br><br>
    <button type="submit" name="registrar">Registrar</button>
  </form>
  <p>¿Ya tienes cuenta? <a href="login.php">Inicia sesión</a></p>
</body>
</html>

<?php
if (isset($_POST['registrar'])) {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $clave = password_hash($_POST['clave'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nombre, correo, clave) VALUES ('$nombre','$correo','$clave')";
    if ($conn->query($sql) === TRUE) {
        echo "✅ Registro exitoso. Ahora puedes <a href='login.php'>iniciar sesión</a>";
    } else {
        echo "❌ Error: " . $conn->error;
    }
}
?>
