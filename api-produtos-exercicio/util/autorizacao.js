const jwt = require("jsonwebtoken");

module.exports = (req) => {
    const authValidator = req.headers.authorization;

    if (authValidator) {
        const token = authValidator.split("Bearer ")[1];
        if (token) {
            try {
                const usuario = jwt.verify(token, process.env.tokenKey);
                return usuario;
            } catch (err) {
                return "Token inválido ou expirado";
            }
        }
        return "Token de autenticação precisa ser um 'Bearer {token}";
    }
    return "Informe um token de autenticação";
};
