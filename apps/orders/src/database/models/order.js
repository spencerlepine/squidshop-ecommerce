/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.STRING,
    },
    orderaddress: {
      type: DataTypes.STRING,
    },
    ordertotal: {
      type: DataTypes.FLOAT,
    },
    purchasedate: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    createdat: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedat: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'order',
  });
  return Order;
};
