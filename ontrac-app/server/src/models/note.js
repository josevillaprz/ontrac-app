"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Note.belongsTo(models.Workout);
    }
  }
  Note.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      text: DataTypes.STRING,
      workoutId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
