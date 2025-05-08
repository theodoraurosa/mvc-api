const Usuario = require('../models/usuarioModel');

exports.criarUsuario = async (req, res) => {
  const { nome, email } = req.body;

  const existe = await Usuario.findOne({ email });
  if (existe) return res.status(400).json({ mensagem: "Email já existe" });

  const novoUsuario = await Usuario.create({ nome, email });

  return res.status(201).json(novoUsuario);
};