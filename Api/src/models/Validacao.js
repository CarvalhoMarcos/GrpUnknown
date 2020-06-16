const { Model, DataTypes } = require("sequelize");

class validacoes extends Model {
  static init(sequelize) {
    super.init(
      {

        data_hora_validacao: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        dsc_diagn: {
          type: DataTypes.STRING(2000),
          allowNull: false
        },
        cid: {
          type: DataTypes.CHAR(3),
          allowNull: false,
        },
        status: {
          type: DataTypes.CHAR(1),
          allowNull: false

        },
      },
      {
        sequelize,

      }
    );
  }
  static associate(models) {
    this.belongsTo(models.laudos_medicos, {
      foreignKey: "laudo_id",
      as: "laudoMedico",
    });
    this.belongsTo(models.medico, {
      foreignKey: "validador_id",
      as: "validador",
    });
  }
}
module.exports = validacoes;

