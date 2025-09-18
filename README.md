# PCW-Pay
PCW Pay: Development of the sales and use application to obtain licenses for your favorite entertainment services.

# 🎁 Platform Card Wallet (PCW)

**PCW** es una solución digital que permite a los usuarios adquirir tarjetas de regalo flexibles, utilizables en múltiples plataformas dentro de una misma categoría (audio, video, videojuegos). Esta flexibilidad elimina la fricción en la compra y mejora la experiencia del destinatario.

---

## 📌 Problema que resuelve

Las tarjetas de regalo tradicionales están limitadas a una sola plataforma, lo que genera incertidumbre y pérdida de valor si el destinatario no la utiliza. PCW permite que el usuario elija la plataforma al momento de redimir la tarjeta, no al momento de comprarla.

---

## 💼 Beneficios para el negocio

- Mayor conversión en ventas de tarjetas digitales.
- Reducción de devoluciones o tarjetas no utilizadas.
- Fidelización de usuarios por experiencia personalizada.
- Interoperabilidad entre wallets gracias a Open Payments.

---

## 🛠️ Componentes del sistema

| Componente         | Descripción                                                                 |
|--------------------|------------------------------------------------------------------------------|
| Frontend Web       | Interfaz responsiva para login, registro y selección de plataforma.         |
| Backend API        | Lógica de negocio, autenticación y procesamiento de pagos.                  |
| Open Payments SDK  | Integración con Interledger para pagos entre wallets.                       |
| Base de Datos      | Gestión de usuarios, tarjetas, transacciones y configuraciones.             |

---

## ⚙️ Tecnologías utilizadas

- **HTML/CSS/JS**: Interfaz de usuario.
- **Node.js**: Backend y scripts de pago.
- **@interledger/open-payments**: SDK para pagos seguros.
- **PostgreSQL / MongoDB**: Persistencia de datos.
- **OpenPayments Protocol**: Estándar abierto para interoperabilidad financiera.

---

## 🔐 Seguridad y buenas prácticas

- Cifrado de contraseñas.
- Validación de entradas en frontend y backend.
- Uso de HTTPS en toda la aplicación.
- Separación de claves privadas (almacenadas en `private.key`).
- Autenticación basada en tokens.
- Hardening de servidores y monitoreo de actividad.

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Instala dependencias con `npm install`.
3. Configura las variables de entorno y claves privadas.
4. Ejecuta el backend con `node open-payments.js`.
5. Abre `index.html` en tu navegador para probar el frontend.

---

## 🧪 Pruebas y documentación

- Pruebas unitarias para pagos, grants y autenticación.
- Diccionario de datos incluido.
- Diagramas UML de arquitectura y flujo de pagos.
- Manual de usuario y guía de instalación disponibles en la carpeta `/docs`.

---

## 📬 Contacto

Proyecto desarrollado por:
- Alfonso Vilchis (OpenPayments Integration)
- Rober Miranda (Frontend UI)
- Raúl Díaz (Diseño UX/UI)