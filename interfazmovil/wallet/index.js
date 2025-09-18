// Cuentas ficticias
const accounts = {
  sender: { name: "https://ilp.interledger-test.dev/pepeda", balance: 1000 },
  intermediary: { name: "https://ilp.interledger-test.dev/c884c441", balance: 0 },
  receiver: { name: "https://ilp.interledger-test.dev/peperecibe", balance: 0 }
};

// Obtener el monto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const amount = parseInt(urlParams.get("amount") || "0");

document.getElementById("payment-info").innerHTML = `
  <p>Amount to pay: <strong>$${amount}</strong></p>
  <p>Sender: ${accounts.sender.name} (Balance: $${accounts.sender.balance})</p>
  <p>Receiver: ${accounts.receiver.name} (Balance: $${accounts.receiver.balance})</p>
  <p>Intermediary: ${accounts.intermediary.name} (Balance: $${accounts.intermediary.balance})</p>
`;

function processPayment(){
  if(accounts.sender.balance >= amount){
    // Descontar del emisor
    accounts.sender.balance -= amount;

    // Pasar al intermediario
    accounts.intermediary.balance += amount;

    // Transferir al receptor
    accounts.receiver.balance += amount;
    accounts.intermediary.balance -= amount;

    alert("✅ Payment successful!\n" +
      `Sender balance: $${accounts.sender.balance}\n` +
      `Receiver balance: $${accounts.receiver.balance}\n`);
    
    // Opcional: regresar al catálogo
    window.location.href = "interfazmovil/Interfaz Inicio - móvil.html";
  }else{
    alert("❌ Payment failed: insufficient funds.");
  }
}
