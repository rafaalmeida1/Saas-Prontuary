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
}