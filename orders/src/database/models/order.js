/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
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
      type: Sequelize.INTEGER,
    },
    productName: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    purhcasePrice: {
      type: Sequelize.FLOAT,
    },
    productId: {
      type: Sequelize.STRING,
    },
    productImage: {
      type: Sequelize.STRING,
    },
    shipAddress: {
      type: Sequelize.STRING,
    },
    purchaseDate: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
