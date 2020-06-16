const { Model, DataTypes } = require("sequelize");

class medico extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        crm: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        eh_docente: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        titulo_uni: {
          type: DataTypes.STRING,
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
      foreignKey: "medico_id",
      as: "medicos",
    });
    this.hasMany(models.usuario, {
      foreignKey: "cpf",
      as: "usuarios"
    });
  }
}
module.exports = medico;

