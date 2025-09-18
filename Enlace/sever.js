const express = require('express')
const app = express();
const port = 3000;

app.get('/',(requestAnimationFrame, res) => {
    res.sendFile(_dirname = 'store.html');
});

app.post('ejecutar-script',(req,res)=>{
    console.log('!Se hizo click');
    res.send('Script ejecutado')
});

app.listen(port, () =>{
    console.log('Servidor escuchando en https//localhost:${port}');
});