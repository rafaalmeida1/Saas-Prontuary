// Middleware para verificar o token JWT
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token é obrigatório' });
  
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });
  
      req.user = decoded;
      next();
    });
};

module.exports = verifyToken;