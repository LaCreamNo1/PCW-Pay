<?php include("db.php"); ?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Iniciar Sesión - Platform Card Wallet</title>
</head>
<body>
  <h2>Iniciar sesión</h2>
  <form method="POST">
    <input type="email" name="correo" placeholder="Correo electrónico" required><br><br>
    <input type="password" name="clave" placeholder="Contraseña" required><br><br>
    <button type="submit" name="login">Entrar</button>
  </form>
  <p>¿No tienes cuenta? <a href="registro.php">Regístrate</a></p>
</body>
</html>

<?php
if (isset($_POST['login'])) {
    $correo = $_POST['correo'];
    $clave = $_POST['clave'];

    $sql = "SELECT * FROM usuarios WHERE correo='$correo'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();
        if (password_verify($clave, $usuario['clave'])) {
            echo "🎉 Bienvenido " . $usuario['nombre'];
            // Aquí podrías redirigir a la pantalla principal de la app
            // header("Location: home.php");
        } else {
            echo "⚠️ Contraseña incorrecta";
        }
    } else {
        echo "⚠️ Usuario no encontrado";
    }
}
?>
