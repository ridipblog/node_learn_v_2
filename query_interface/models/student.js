module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "student",
    {
      location: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      tableName: "student",
    }
  );
  return Student;
};
