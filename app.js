const express = require('express');

const app = express();
const port = process.env.port || 3000;
app.listen (port, () => console.log ("servidor andando"));

//los parametros de la funcion son un callback

app.get ("/", function (req, res) {
    res.send ("llegaste al sitio")
});