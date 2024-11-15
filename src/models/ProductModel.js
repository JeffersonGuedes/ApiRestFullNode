const connection = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductModel = connection.define("ProductModel",{
          name: {
                    type: DataTypes.STRING,
                    allowNull: false
          },
          price:{
                    type: DataTypes.DECIMAL(5,2),
          },
          slug:{
                    type: DataTypes.STRING(255),
                    allowNull: false
          },
          description: {
                    type: DataTypes.TEXT,
                    defaultValue: 'legal você não digitou nada',
                    allowNull: false
          },
          price_with_discount: {
                    type: DataTypes.DECIMAL(5,2),
                    allowNull: false
          },
          stock: {
                    type: DataTypes.INTEGER,
                    defaultValue: 0,
                    allownull: false
          }
},{
          tableName:'product'
})

module.exports = ProductModel;
