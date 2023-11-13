const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.ENUM,
      values: ['1','2','3','4','5']
    },
    duracion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    temporada: {
      type: DataTypes.ENUM,
      values: ['verano','otoño','invierno','primavera']
    },
  });
};
