<?php include("db.php"); ?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Iniciar Sesión - Platform Card Wallet</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root{
      --bg-gradient-1: #6dd5ed;
      --bg-gradient-2: #2193b0;
      --accent: #ff7a59;
      --card-bg: rgba(255,255,255,0.95);
      --muted: #6b7280;
      --glass: rgba(255,255,255,0.06);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box;margin:0;padding:0}
    body,html{height:100%}

    .screen{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:linear-gradient(135deg,var(--bg-gradient-1),var(--bg-gradient-2));
    }

    .card{
      width:100%;max-width:420px;
      border-radius:18px;
      background:var(--card-bg);
      box-shadow:0 10px 30px rgba(16,24,40,0.25);
      padding:28px;
      display:flex;flex-direction:column;gap:20px;
      backdrop-filter: blur(6px);
    }

    h2{font-size:22px;color:#0f172a;text-align:center}
    p{font-size:14px;color:var(--muted);text-align:center}

    form{display:flex;flex-direction:column;gap:14px}
    input{
      padding:14px;border-radius:12px;border:1px solid #e5e7eb;
      font-size:15px;outline:none
    }
    input:focus{border-color:var(--accent)}

    .btn{
      padding:14px;border-radius:12px;border:0;
      font-weight:600;font-size:16px;cursor:pointer;
      background:linear-gradient(90deg,var(--accent),#ff9966);
      color:white;box-shadow:0 6px 18px rgba(255,122,89,0.22)
    }
    .link{font-size:13px;text-align:center}
    .link a{color:var(--accent);text-decoration:none;font-weight:600}
  </style>
</head>
<body>
  <main class="screen">
    <section class="card">
      <h2>Iniciar Sesión</h2>
      <p>Accede a tu cuenta de Platform Card Wallet</p>

      <form method="POST">
        <input type="email" name="correo" placeholder="Correo electrónico" required>
        <input type="password" name="clave" placeholder="Contraseña" required>
        <button type="submit" class="btn" name="login">Entrar</button>
      </form>

      <div class="link">
        ¿No tienes cuenta? <a href="registro.php">Regístrate</a>
      </div>
    </section>
  </main>
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
            echo "<script>alert('🎉 Bienvenido ".$usuario['nombre']."');window.location='home.php';</script>";
        } else {
            echo "<script>alert('⚠️ Contraseña incorrecta');</script>";
        }
    } else {
        echo "<script>alert('⚠️ Usuario no encontrado');</script>";
    }
}
?>