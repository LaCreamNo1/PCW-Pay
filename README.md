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
| Database            | Manages users, cards, transactions, and configurations.                     |

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
- **Alfonso Adrian Vilchis Diaz** — OpenPayments integration, database.
- **Roberto Emmanuel Miranda** — Visual design.
- **Raúl Díaz Regulez** — Wallet design and integration.