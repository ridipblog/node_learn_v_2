module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define("tags", {
    name: DataTypes.STRING,
  });
  return Tag;
};
