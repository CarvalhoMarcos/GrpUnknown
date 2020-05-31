const { Model, DataTypes } = require("sequelize");

class usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        tipo_usuario: DataTypes.CHAR,
        data_nasc: DataTypes.DATEONLY,
        // password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        sexo: DataTypes.CHAR,
        cor: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.medico, {
      foreignKey: "cpf",
      as: "informacoes",
    });
    //   this.belongsToMany(models.tech, {
    //     foreignKey: "userId",
    //     through: "userTechs",
    //     as: "techs",
    //   });
    // }
  }
}
module.exports = usuario;

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// module.exports = (sequelize, DataTypes) => {
//   const Usuario = sequelize.define(
//     "Usuario",
//     {
//       cpf: DataTypes.INTEGER,
//       nome: DataTypes.STRING,
//       email: DataTypes.STRING,
//       tipo_usuario: DataTypes.CHAR,
//       password: DataTypes.VIRTUAL,
//       password_hash: DataTypes.STRING,
//       sexo: DataTypes.CHAR,
//       cor: DataTypes.STRING
//     },
//     {
//       hooks: {
//         beforeSave: async user => {
//           if (user.password) {
//             user.password_hash = await bcrypt.hash(user.password, 8);
//           }
//         }
//       }
//     }
//   );

//   Usuario.prototype.checkPassword = function(password) {
//     return bcrypt.compare(password, this.password_hash);
//   };

//   Usuario.prototype.generateToken = function() {
//     return jwt.sign({ id: this.id }, process.env.APP_SECRET);
//   };

//   return Usuario;
// };
