module.exports = (sequelize, DataTypes) => {
  const Employe = sequelize.define(
    "employe",
    {
      name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      paranoid: true,
      deletedAt: "softDelete",
    }
  );
  return Employe;
};
