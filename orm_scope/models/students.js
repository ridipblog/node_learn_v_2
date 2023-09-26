module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "students",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("name", value + " code ");
        },
        get() {
          return this.getDataValue("name") + "done";
        },
      },
      email: {
        type: DataTypes.STRING,
        // defaultValue: "test@gmai.com",
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // equals: "male",
          //   equals: {
          //     args: "male",
          //     msg: "Plase Select A Valid Gender",
          //   },
          isIn: {
            args: [["male", "female"]],
            msg: "Plase Enter Valid Gender",
          },
        },
      },
      status: DataTypes.INTEGER,
    },
    {
      // timestamps:true
      updatedAt: true,
      // engine:'InnoDB'
    }
  );
  return Students;
};
