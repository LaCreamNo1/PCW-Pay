const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // npm install node-fetch@2

const app = express();
const PORT = 3000;

// URLs de Interledger
const receiverUrl = "https://ilp.interledger-test.dev/peperecibe";       // Receptor final
const intermediaryUrl = "https://ilp.interledger-test.dev/c884c441";    // Intermediario

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Endpoint de pago
app.post('/pay', async (req, res) => {
    const { buyerUrl, total } = req.body;

    if(!buyerUrl || !total){
        return res.status(400).json({ error: "Buyer URL and total amount are required" });
    }

    try {
        console.log(`Processing payment of $${total} from buyer ${buyerUrl}`);

        // Enviar solicitud al intermediario de Interledger
        const response = await fetch(intermediaryUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: buyerUrl, receiver: receiverUrl, amount: total })
        });

        const data = await response.json();

        if(response.ok){
            return res.json({ message: `Payment of $${total} successful!` });
        } else {
            return res.status(500).json({ error: data.error || 'Payment failed' });
        }

    } catch(err) {
        console.error(err);
        return res.status(500).json({ error: "Payment failed due to server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
