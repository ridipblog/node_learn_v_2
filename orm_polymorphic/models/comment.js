module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    title: DataTypes.STRING,
    commenttableId: DataTypes.INTEGER,
    commenttabeType: DataTypes.STRING,
  });
  return Comment;
};
