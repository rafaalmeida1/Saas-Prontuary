const UsuarioService = require('../services/authService');
const { generateToken } = require('../utils/auth');

exports.login = async (req, res) => {
  try {
    const usuario = await UsuarioService.autenticar(req.body.username, req.body.password);
    if (!usuario) return res.status(401).send('Credenciais inválidas.');

    const token = generateToken(usuario);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const usuario = await UsuarioService.criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}