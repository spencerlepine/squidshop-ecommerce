/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartItem.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    productid: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    userid: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    category: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    rating_rate: {
      type: Sequelize.FLOAT,
    },
    rating_count: {
      type: Sequelize.INTEGER,
    },
    createdat: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedat: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'cartitem',
  });
  return CartItem;
};
