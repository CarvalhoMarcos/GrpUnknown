const { Model, DataTypes } = require("sequelize");

class laudos_medicos extends Model {
  static init(sequelize) {
    super.init(
      {

        data_hora_laudo: {
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
        validado: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
      },
      {
        sequelize,

      }
    );
  }
  static associate(models) {
    this.belongsTo(models.usuario, {
      foreignKey: "paciente_id",
      as: "paciente",
    });
    this.belongsTo(models.medico, {
      foreignKey: "autor_id",
      as: "residente",
    });
    this.belongsTo(models.registro_exame, {
      foreignKey: "exame_id",
      as: "exame",
    });
  }
}
module.exports = laudos_medicos;

