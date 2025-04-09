const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

exports.autenticar = async (username, password) => {
  const usuario = await Usuario.findOne({ where: { username } });
  if (!usuario || !(await bcrypt.compare(password, usuario.password))) return null;
  return usuario;
};

exports.criarUsuario = async (dadosUsuario) => {
  const pass = dadosUsuario.password;
  const hash = await bcrypt.hash(pass, 10);
  dadosUsuario.password = hash;

  const usuario = await Usuario.create(dadosUsuario);
  return usuario;
};

exports.getUserById = async (id) => {
  return await Usuario.findByPk(id);
};

exports.updateUser = async (id, userData) => {
  // Don't allow password to be updated through this method
  if (userData.password) {
    delete userData.password;
  }
  
  await Usuario.update(userData, { where: { id } });
  return await Usuario.findByPk(id);
};

exports.changePassword = async (id, currentPassword, newPassword) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }
  
  // Verify current password
  const isValid = await bcrypt.compare(currentPassword, usuario.password);
  if (!isValid) {
    return false;
  }
  
  // Hash and update new password
  const hash = await bcrypt.hash(newPassword, 10);
  await Usuario.update({ password: hash }, { where: { id } });
  
  return true;
};