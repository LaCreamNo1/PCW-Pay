# 💳 PCW Pay — Platform Card Wallet

**PCW Pay** es una aplicación web para la compra, gestión y redención de tarjetas de regalo digitales que permiten obtener licencias para tus servicios favoritos de entretenimiento. A través de una arquitectura flexible y segura, los usuarios pueden elegir entre múltiples plataformas dentro de una misma categoría (audio, video, videojuegos), incluso después de haber adquirido la tarjeta.

---

## 🎯 Objetivo del proyecto

Desarrollar una solución interoperable que elimine la fricción en la compra de tarjetas de regalo, permitiendo al usuario final decidir en qué plataforma utilizar su saldo, y al mismo tiempo facilitar pagos seguros entre wallets mediante el protocolo Open Payments.

---

## 📌 Problema que resuelve

Las tarjetas de regalo tradicionales están limitadas a una sola plataforma, lo que genera:

- Incertidumbre sobre los gustos del destinatario.
- Pérdida de valor si no se usa la tarjeta.
- Frustración en el proceso de compra.

**PCW Pay** permite que el usuario elija la plataforma al momento de redimir la tarjeta, no al momento de comprarla.

---

## 💼 Beneficios para el negocio

- ✅ Mayor conversión en ventas de tarjetas digitales.
- 🔁 Reducción de devoluciones o tarjetas no utilizadas.
- 💡 Fidelización de usuarios por experiencia personalizada.
- 🔗 Interoperabilidad entre wallets gracias a Open Payments.

---

## 🛠️ Componentes del sistema

| Componente         | Descripción                                                                 |
|--------------------|------------------------------------------------------------------------------|
| Frontend Web       | Interfaz responsiva para login, registro, selección de plataforma y carrito. |
| Backend API        | Lógica de negocio, autenticación y procesamiento de pagos.                  |
| Open Payments SDK  | Integración con Interledger para pagos entre wallets.                       |
| Base de Datos      | Gestión de usuarios, tarjetas, transacciones y configuraciones.             |

---

## 🎨 Interfaz de usuario

- Panel lateral con carrusel automático de imágenes de plataformas disponibles.
- Formulario para seleccionar:
  - Plataforma (Steam, PlayStation, Xbox, etc.)
  - Moneda (USD, MXN, EUR, etc.)
  - Monto de la tarjeta ($10–$50)
- Botón de compra que agrega el monto al carrito.
- Carrito flotante con total acumulado y botón para pagar.
- Comportamiento responsivo para dispositivos móviles.

---

## ⚙️ Tecnologías utilizadas

- **HTML/CSS/JS**: Interfaz de usuario.
- **Node.js**: Backend y scripts de pago.
- **@interledger/open-payments**: SDK para pagos seguros.
- **PostgreSQL / MongoDB**: Persistencia de datos.
- **OpenPayments Protocol**: Estándar abierto para interoperabilidad financiera.

---

## 🔐 Seguridad y buenas prácticas

- 🔒 Cifrado de contraseñas.
- 🧼 Validación de entradas en frontend y backend.
- 🌐 Uso de HTTPS en toda la aplicación.
- 🔑 Separación de claves privadas (almacenadas en `private.key`).
- 🛡️ Autenticación basada en tokens.
- 🧯 Hardening de servidores y monitoreo de actividad.

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Instala dependencias con `npm install`.
3. Configura el servidor en `localhost:3000`.
4. Ejecuta el backend con `node open-payments.js`.
5. Abre `index.html` en tu navegador para probar el frontend.

---

## 🧪 Pruebas y documentación

- ✅ Pruebas unitarias para pagos, grants y autenticación.
- 📖 Diccionario de datos incluido.
- 📊 Diagramas UML de arquitectura y flujo de pagos.
- 📚 Manual de usuario y guía de instalación disponibles en la carpeta `/docs`.

---

## 👥 Equipo de desarrollo

- **Miguel Gonzalez Gonzalez** — Backend, estructura funcional.
- **Alfonso Adrian Vilchis Diaz** — Integración OpenPayments, base de datos.
- **Roberto Emmanuel Miranda** — Diseño visual.
- **Raúl Díaz Regulez** — Diseño e integración de wallets.
