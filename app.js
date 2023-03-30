//Declaraciones
const express = require("express");

//Configuraciones
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo del los Servidores Web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto http://localhost:${port}`);
});

app.get('*', (req,res) => {
    res.send('404 | Pagina no encontrada');
});