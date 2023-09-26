module.exports = (sequelize, DataTypes) => {
  const Post_tags = sequelize.define("post_tags", {
    postID: DataTypes.INTEGER,
    tagID: DataTypes.INTEGER,
  });
  return Post_tags;
};
