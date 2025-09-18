const express = require('express')
const app = express();
const port = `3000`;

app.get('/',(requestAnimationFrame, res) => {
    res.sendFile(_dirname = 'store.html');
});
app.use(express.json());

app.get('/alive', (req, res) => {
    res.send('server alive');
})

app.post('/ejecutar-script',(req,res)=>{
    console.log(req.body);
    const datoRecibido = req.body;
    res.json(datoRecibido);
});

app.listen(port, () =>{
    console.log(`Servidor escuchando en https//localhost:${port}`);
});