const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');

//lo de abajo hace que la carpeta public sea estatica
app.use(express.static(publicPath));

//levanta el servidor
app.listen(3000, ()=>{
    console.log('Servidor andando');
});

//configura la home
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));



