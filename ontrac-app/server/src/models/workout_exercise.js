"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Workout_exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workout_exercise.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      workoutId: DataTypes.UUID,
      exerciseId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Workout_exercise",
    }
  );
  return Workout_exercise;
};
