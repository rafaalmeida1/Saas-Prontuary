const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret';

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '5h' });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token é necessário para autenticação.');

  jwt.verify(token.split(' ')[1], secret, (err, decoded) => {
    if (err) return res.status(401).send('Token inválido.');
    req.user = decoded;
    next();
  });
};
