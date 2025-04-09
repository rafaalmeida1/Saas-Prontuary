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
};

exports.getProfile = async (req, res) => {
  try {
    const usuario = await UsuarioService.getUserById(req.user.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
    
    // Remove sensitive data
    const userProfile = {
      id: usuario.id,
      username: usuario.username,
      role: usuario.role,
      createdAt: usuario.createdAt
    };
    
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const usuario = await UsuarioService.updateUser(req.user.id, req.body);
    
    // Remove sensitive data
    const userProfile = {
      id: usuario.id,
      username: usuario.username,
      role: usuario.role,
      updatedAt: usuario.updatedAt
    };
    
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Senhas atual e nova são necessárias' });
    }
    
    const updated = await UsuarioService.changePassword(
      req.user.id, 
      currentPassword, 
      newPassword
    );
    
    if (!updated) {
      return res.status(400).json({ error: 'Senha atual incorreta' });
    }
    
    res.status(200).json({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};