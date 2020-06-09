const { Model, DataTypes } = require("sequelize");

class registro_exame extends Model {
  static init(sequelize) {
    super.init(
      {
        data_hora_exame: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,

      }
    );
  }
  static associate(models) {
    this.belongsTo(models.pedidos_exames, {
      foreignKey: "pedido_id",
      as: "paciente",
    });
    this.belongsTo(models.medico, {
      foreignKey: "examinador_id",
      as: "residente",
    });
    this.belongsTo(models.arquivoPdf, {
      foreignKey: "pdf_id",
      as: "pdf",
    });
    this.hasMany(models.laudos_medicos, {
      foreignKey: "exame_id",
      as: "laudo",
    });
  }
}
module.exports = registro_exame;

