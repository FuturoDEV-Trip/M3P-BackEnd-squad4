const Local = require("../models/Local");
const Usuario = require("../models/Usuario");

class DashboardController {
  async info(req, res) {
    /*  
        #swagger.tags = ['Dashboard'],
        #swagger.summary = 'Informação geral do sistema'
    */
    try {
      const usuarios = await Usuario.count();
      const locais = await Local.count();

      return res.json({
        usuarios: usuarios,
        locais: locais,
      });
    } catch (error) {
      return res.status(500).json({ message: "Não possível obter a informação" });
    }
  }
}

module.exports = new DashboardController()