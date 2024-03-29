import express from 'express'
const router = express.Router();
import { 
    registrar,
    perfil, confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js';

import checkAuth from '../middleware/authMiddleware.js';


// Area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post("/login", autenticar);
router.post('/olvide-password', olvidePassword); // Validar el email del usuario
// router.get('/olvide-password/:token', comprobarToken); // leer el token
// router.post('/olvide-password/:token', nuevoPassword); // Para almacenar el nuevo password

router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Area privada
router.get('/perfil',checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);


export default router;
