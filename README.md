# 💳 PCW Pay — Platform Card Wallet

**PCW Pay** is a web application for purchasing, managing, and redeeming digital gift cards that grant access to your favorite entertainment services. Through a flexible and secure architecture, users can choose from multiple platforms within a category (audio, video, gaming)—even after the card has been purchased.

---

## 🎯 Project Objective

To develop an interoperable solution that removes friction from the gift card purchasing process, allowing users to decide where to redeem their balance, while enabling secure wallet-to-wallet payments via the Open Payments protocol.

---

## 📌 Problem It Solves

Traditional gift cards are locked to a single platform, which leads to:

- Uncertainty about the recipient’s preferences.
- Loss of value if the card goes unused.
- Frustration during the purchase process.

**PCW Pay** allows users to choose the platform at the time of redemption, not at the time of purchase.

---

## 💼 Business Benefits

- ✅ Higher conversion rates for digital gift card sales.
- 🔁 Fewer returns or unused cards.
- 💡 Improved user retention through personalized experiences.
- 🔗 Wallet interoperability powered by Open Payments.

---



## 🛠️ System Components

| Component           | Description                                                                 |
|---------------------|------------------------------------------------------------------------------|
| Frontend Web        | Responsive interface for login, registration, platform selection, and cart. |
| Backend API         | Business logic, authentication, and payment processing.                     |
| Open Payments SDK   | Integration with Interledger for wallet-to-wallet payments.                 |

---

## 🎨 User Interface Features

- Sidebar with automatic image carousel of available platforms.
- Form to select:
  - Gaming platform (Steam, PlayStation, Xbox, etc.)
  - Currency (USD, MXN, EUR, etc.)
  - Card amount ($10–$50)
- Purchase button that adds the amount to the cart.
- Floating cart with total and payment button.
- Responsive layout for mobile devices.

---

## 🧭 User Flow & Access Instructions

In addition to launching the backend server with `node open-payments.js`, follow these steps to access and use the frontend application:

1. Navigate to the `/pages` directory.
2. Open the `index.html` file in your browser.
3. No login is required — the application is publicly accessible.
4. Select a product from the available entertainment platforms.
5. Choose the desired amount for the gift card (e.g., $10, $15, $20, etc.).
6. Click the **Pay** button to proceed with the transaction.
7. You will be prompted to enter the **URL of the payment source**, which corresponds to the seller’s wallet (already configured).
8. Finally, provide your **Open Payments wallet test URL** to complete the transaction.

💱 Currency conversion is supported. You may purchase in one currency (e.g., USD) and pay in another (e.g., MXN), depending on the wallet configuration and platform compatibility.

> ℹ️ **Note:** You may perform multiple demo transactions using Open Payments test wallets. These payments are part of a beta prototype and do not generate actual charges to the test wallet. They are intended solely for simulation and validation of the payment flow.

---

## ⚙️ Technologies Used

- **HTML/CSS/JS**: User interface.
- **Node.js**: Backend and payment scripts.
- **@interledger/open-payments**: Secure payment SDK.
- **PostgreSQL / MongoDB**: Data persistence.
- **OpenPayments Protocol**: Open standard for financial interoperability.

---

## 🔐 Security & Best Practices

- 🔒 Password encryption.
- 🧼 Input validation on frontend and backend.
- 🌐 HTTPS enforced across the application.
- 🔑 Separation of private keys (stored in `private.key`).
- 🛡️ Token-based authentication.
- 🧯 Server hardening and activity monitoring.

---

## 🚀 How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the server on `localhost:3000`.
4. Run the backend with `node open-payments.js`.
5. Open `index.html` in your browser to test the frontend.

---

## 🧪 Testing & Documentation

- ✅ Unit tests for payments, grants, and authentication.
- 📖 Included data dictionary.
- 📊 UML diagrams for architecture and payment flow.
- 📚 User manual and installation guide available in the `/docs` folder.

---

## 👥 Development Team

- **Miguel Gonzalez Gonzalez** — Backend, functional structure.
- **Alfonso Adrian Vilchis Diaz** — OpenPayments integration.
- **Roberto Emmanuel Miranda** — Visual design.
- **Raúl Díaz Regulez** — Wallet design and integration.