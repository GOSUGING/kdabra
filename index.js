import express from 'express';
import { users } from './users.js';
import { validarUsuario, generarNumeroAleatorio } from './middleware/authmiddleware.js';
import path from 'path';
const app = express()
const PORT = process.env.PORT || 3000
const __dirname = import.meta.dirname;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/abracadabra/usuarios', (req, res) => {
    res.json(users);
});

app.get('/abracadabra/juego/:usuario', validarUsuario, (req, res) => {
    const numeroAleatorio = generarNumeroAleatorio();
    const usuario = req.params.usuario;

    
    res.sendFile(path.join(__dirname, '/index.html'));

});


app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = parseInt(req.params.n);
    const numeroAleatorio = generarNumeroAleatorio();
    if (n === numeroAleatorio) {
        res.sendFile(__dirname + '/assets/img/conejito.jpg');
    } else {
        res.sendFile(__dirname + '/assets/img/voldemort.jpg');
    }
});


app.use((req, res) => {
    res.status(404).send("Esta página no existe...");
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
