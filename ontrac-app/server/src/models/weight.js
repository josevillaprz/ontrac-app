"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Weight.belongsTo(models.User);
    }
  }
  Weight.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      pounds: DataTypes.NUMBER,
      userId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Weight",
    }
  );
  return Weight;
};
