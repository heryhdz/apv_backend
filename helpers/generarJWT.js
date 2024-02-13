import jwt from 'jsonwebtoken'

const generarJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",   
    }); //crear un nuevo JWT
}

export default generarJWT;

