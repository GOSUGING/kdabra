import { users } from "../users.js";
import path from 'path';
const __dirname = import.meta.dirname;

const validarUsuario = (req, res, next) => {
    const usuario = req.params.usuario;
    if (users.includes(usuario)) {
      next();
    } else {
      res.sendFile(path.join( __dirname , '../assets/img/who.jpeg'));
    }
  };
  
  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 4) + 1;
  };
  

export {validarUsuario, generarNumeroAleatorio};

 