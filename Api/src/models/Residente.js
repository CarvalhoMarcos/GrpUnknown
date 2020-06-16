const { Model, DataTypes } = require("sequelize");

class residente extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        ano_res: {
          type: DataTypes.STRING(4),
          allowNull: false,
        },
      },
      {
        sequelize,

      }
    );
  }
  static associate(models) {
    this.hasMany(models.usuario, {
      foreignKey: "cpf",
      as: "usuarios"
    });
  }
}
module.exports = residente;

