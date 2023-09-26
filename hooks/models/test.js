module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "test",
    {
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
    },
    {
      // frist way to use Hooks
      // hooks: {
      //   beforeValidate: (user, options) => {
      //     user.name = "coder";
      //   },
      //   afterValidate: (user, options) => {
      //     user.name = "coder 16";
      //   },
      // },
    }
  );

  // Second Way To Use Hooks

  Test.addHook("beforeValidate", "customName", (users, options) => {
    users.name = "New Hook";
  });

  // Thrid Way To use Hooks

  Test.afterValidate("lastHook", (users, options) => {
    users.name = "Thrid Hook 2";

    // Remove Hook

    Test.removeHook("customName");
  });
  return Test;
};
