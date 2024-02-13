// Se genera un id que nos servira como token para confirmar el registro de un nuevo usuario.
// Se creo combinando la fecha y por medio de un math.random todo convertido a string.
const generarId = () => {
    return Date.now().toString(32) + Math.random().toString(32).substring(2);
};

export default generarId;