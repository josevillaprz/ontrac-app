"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Exercise.belongsToMany(models.Workout, {
        through: models.Workout_exercise,
      });
      models.Exercise.belongsTo(models.User);
    }
  }
  Exercise.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      sets: DataTypes.NUMBER,
      reps: DataTypes.NUMBER,
      pounds: DataTypes.NUMBER,
      userId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Exercise",
    }
  );
  return Exercise;
};
