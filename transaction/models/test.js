module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("test", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Test;
};
