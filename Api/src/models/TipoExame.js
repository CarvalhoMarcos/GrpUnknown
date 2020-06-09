const { Model, DataTypes } = require("sequelize");

class tipoExame extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          primaryKey: true
        },
        nome_exame: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        recomendacoes: {
          type: DataTypes.STRING(540),
          allowNull: false,
        },
      },
      {
        sequelize,

      }
    );
  }
  static associate(models) {
    this.hasMany(models.pedidos_exames, {
      foreignKey: "pdf_id",
      as: "pdfs",
    });
  }
}
module.exports = tipoExame;

