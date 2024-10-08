const yup = require('yup');

yup.setLocale({
  mixed: {
    required: '${path} é obrigatorio',
    oneOf: "${path} deve ser um dos seguintes valores: ${values}",
  },
  string: {
    email: '${path} não é válido',
  }
});


const schemaAdicionarUsuario = yup.object().shape({
    nome: yup.string().required(),
    sexo: yup.mixed().oneOf(['feminino', 'masculino','outro']).required(),
    cpf: yup.string().matches(/\d{11}/, "O CPF deve conter 11 dígitos sem pontos nem traços").required(),
    data_nascimento: yup.date().typeError('A data de nascimento não está no formato correto (aaaa-mm-dd)').required(),
    cep: yup.string().matches(/\d{8}/, "O CEP deve conter 8 dígitos sem pontos nem traços").required(),
    endereco: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const validarAdicionarUsuario = async (req, res, next) => {
    const { body } = req;
  
    try {
      await schemaAdicionarUsuario.validate(body, { abortEarly: false });
      next(); 
    } catch (erro) {
      res.status(400).json({ erro: erro.errors });
    }
};

const schemaAdicionarLocal = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  localidade: yup.string().required(),
  cep: yup.string().notRequired().matches(/\d{8}/, "O CEP deve conter 8 dígitos sem pontos nem traços"),
  coordenadas_geograficas: yup.string(),
});

const validarAdicionarLocal = async (req, res, next) => {
  const { body } = req;

  try {
    await schemaAdicionarLocal.validate(body, { abortEarly: false });
    next(); 
  } catch (erro) {
    res.status(400).json({ erro: erro.errors });
  }
};


module.exports = { validarAdicionarUsuario, validarAdicionarLocal }