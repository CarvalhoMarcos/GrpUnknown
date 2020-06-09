const { Model, DataTypes } = require("sequelize");

class arquivoPdf extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUIDV4,
          primaryKey: true
        },
        access_token: {
          type: DataTypes.STRING(30),
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
module.exports = arquivoPdf;

