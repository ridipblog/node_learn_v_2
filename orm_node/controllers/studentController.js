const { response } = require("express");
var db = require("../models/conn.js");
const Students = db.students;
const Posts = db.posts;
const { Sequelize, Op, where } = require("sequelize");
const students = require("../models/students.js");
var addStudent = async (req, res) => {
  // let data=await Students.build({name:'Coder 2',email:'coder2@gamil.com'});\
  // await data.save();
  let data = await Students.create({
    name: "coder 7",
    email: "coder7@gmail.com",
  });

  // if you update cvalue on runtime
  // data.name='temp';
  // data.save();

  // if you delete value on run time
  data.destroy();
  console.log(data.dataValues);

  let response = {
    data: "Ok",
  };
  res.status(200).json(response);
};
var crudOpearation = async (req, res) => {
  // Data Insert

  // let data=await Students.create({name:'coder 8',email:'coder8@gmail.com'});

  // Data Upadted

  // let data=await Students.update({name:'coder 2',gender:'male'},{
  //     where:{
  //         id:1
  //     }
  // });

  // Data Deleted

  // let data=await Students.destroy({
  //     where:{
  //         id:2
  //     }
  // });

  // Data Truncate

  // let data=await Students.destroy({
  //     truncate:true
  // });

  // Find Data

  // let data=await Students.findAll({});
  let data = await Students.findOne({});
  let response = {
    data: data,
  };
  res.status(200).json(response);
};
var queryData = async (req, res) => {
  // Insert Specific Filed

  // let data=await Students.create({name:'query 1',email:'query1@gmail.com',gender:'male'},{
  //     fields:['email']
  // })

  // Select Data

  // let data=await Students.findAll({
  //     attributes:[
  //         'name',
  //         ['email','emailID']
  //     ]
  // });

  // let data=await Students.findAll({
  //     attributes:[
  //         'name',
  //         ['email','emailID'],
  //         [Sequelize.fn('Count',Sequelize.col('email')),'emailCount']
  //     ]

  // })

  // let data=await Students.findAll({
  //     attributes:[
  //         'name',
  //         ['email','emailID'],
  //         [Sequelize.fn('CONCAT',Sequelize.col('email'),' ID'),'emailID']
  //     ]
  // });

  // let data=await Students.findOne({
  //     where:{
  //         id:1
  //     }
  // });

  // incldue and exclude

  // let data=await Students.findAll({
  //     attributes:{
  //         exclude:[
  //             'createdAt',
  //             'updatedAt'
  //         ],
  //         include:[
  //             [
  //                 Sequelize.fn('CONCAT',Sequelize.col('name'),' Honda'),'FullName'
  //             ]
  //         ]
  //     }
  // })
  // Opearator

  // let data=await Students.findAll({
  //     where:{
  //         id:{
  //             [Op.eq]:1
  //         },
  //         name:{
  //             [Op.eq]:'coder 2'
  //         },
  //         email:{
  //             [Op.like]:'%@gamil.com'
  //         }
  //     }
  // })

  // let data=await Students.findAll({
  //     where:{
  //         [Op.or]:[
  //             {id:3},
  //             {name:'code'}
  //         ]
  //     }
  // })

  let data = await Students.findAll({
    where: {
      email: {
        [Op.like]: "%@gmail.com",
      },
    },
    order: [["name", "DESC"]],
    limit: 2,
  });
  let response = {
    data: data,
  };
  res.status(200).json(response);
};
var finderQuery = async (req, res) => {
  //   let data = await Students.findAll({});
  //   let data = await Students.findOne({});
  //   let data = await Students.findByPk(4);
  //   let data = await Students.findAndCountAll({
  //     where: {
  //       email: "query1@gmail.com",
  //     },
  //   });
  let [data, created] = await Students.findOrCreate({
    where: { name: "dummy" },
    defaults: {
      email: "dummy@gamil.com",
      gender: "male",
    },
  });
  let response = {
    data: data,
    add: created,
  };
  res.status(200).json(response);
};
var setGetQuery = async (req, res) => {
  //   let data = await Students.create({
  //     name: "hacker 1",
  //     email: "hacker1@gmail.com",
  //   });
  let data = await Students.findAll({});
  let response = {
    data: data,
  };
  res.status(200).json(response);
};
let Validation = async (req, res) => {
  try {
    let data = await Students.create({
      name: "hacker 4",
      email: "hacker4@gmail.com",
      gender: "femalew",
    });
    res.status(200).json("Inserted");
  } catch (e) {
    e.errors.forEach((error) => {
      console.log(error.validatorKey);
    });
    res.status(200).json(e);
  }
};
var rawQuery = async (req, res) => {
  //   const users = await db.sequelize.query("select * from students");
  //   const users = await db.sequelize.query(
  //     "select * from students where gender=:gender",
  //     {
  //       replacements: { gender: "male" },
  //     }
  //   );
  //   const users = await db.sequelize.query(
  //     "select * from students where gender=?",
  //     {
  //       replacements: ["male"],
  //     }
  //   );
  //   const users = await db.sequelize.query(
  //     "select * from students where gender IN(:gender)",
  //     {
  //       replacements: { gender: ["male", "female"] },
  //     }
  //   );
  //   const users = await db.sequelize.query(
  //     "select * from students where email LIKE :searchEmail",
  //     {
  //       replacements: { searchEmail: "%@gmail.com" },
  //     }
  //   );
  const users = await db.sequelize.query(
    "select * from students where gender=$gender",
    {
      bind: { gender: "male" },
    }
  );
  console.log(users);
  res.status(200).json(users);
};

module.exports = {
  addStudent,
  crudOpearation,
  queryData,
  finderQuery,
  setGetQuery,
  Validation,
  rawQuery,
};
