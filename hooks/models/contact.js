module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("contacts", {
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });
  return Contact;
};
