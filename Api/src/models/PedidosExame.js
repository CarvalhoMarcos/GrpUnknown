const { Model, DataTypes } = require("sequelize");

class pedidos_exames extends Model {
  static init(sequelize) {
    super.init(
      {
        data_prev: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        desc_diagn: {
          type: DataTypes.STRING(540),
          allowNull: false,
        },
        cid: {
          type: DataTypes.CHAR(3),
          allowNull: false,
        },
        status: {
          type: DataTypes.CHAR(1),
          allowNull: false,
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
      foreignKey: "medico_id",
      as: "medico",
    });
    this.belongsTo(models.arquivoPdf, {
      foreignKey: "pdf_id",
      as: "pdf",
    });
    this.belongsTo(models.tipoExame, {
      foreignKey: "tipo_exame_id",
      as: "tipoExame",
    });
  }
}
module.exports = pedidos_exames;

