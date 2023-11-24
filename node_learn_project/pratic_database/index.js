const express = require('express');
const app = express();
const db = require('./models/index');
const { where } = require('sequelize');
const User = db.users;
const State = db.states;
const City = db.citys;
// app.get('/', async (req, res) => {
//     for (var i = 0; i < 4; i++) {
//         const save_state = await User.create({
//             name: "coder 1" + i,
//             email: "coder@gmail.com " + i,
//             state_id: (i + 1),
//             city_id: (i + 1)

//         });
//     }
//     res.send("ok");
// });
app.get("/get_state_wise", async (req, res) => {
    const getStateWise1 = async () => {
        const data = await User.findAll({
            attributes: ['name'],
            include: [
                {
                    attributes: ['state_name'],
                    model: State,
                    as: "state_info",
                    where: {
                        id: 33
                    }
                },

            ],
            where: {
                id: 3
            },
        });
        return data;
    };
    const data = await getStateWise1();
    res.send(data);
});
app.get("/get_state_city_wise", async (req, res) => {
    const stateCityWise = async () => {
        const data = await User.findAll({
            include: [
                {
                    model: State,
                    as: "state_info",
                    where: {
                        id: 33
                    }
                },
                {
                    model: City,
                    as: "city_info",
                    where: {
                        id: 3
                    }

                    // If You Want Use Or
                    // where: {
                    //     [db.Sequelize.Op.or]: [
                    //         { id: 3 },
                    //         { id: 4 }
                    //     ]
                    // }
                }
            ],
            where: {
                id: 3
            },
        });
        return data;
    }

    const stateCityWise2 = async () => {
        const data = await User.findAll({
            where: {
                id: 3
            },
            include: [
                {
                    model: State,
                    as: "state_info",
                    where: {
                        [db.Sequelize.Op.or]: [
                            { id: 33 },
                            { id: 2 }
                        ]
                    }
                },
                {
                    model: City,
                    as: "city_info",
                    where: {
                        [db.Sequelize.Op.or]: [
                            { id: 3 },
                            { id: 2 }
                        ]
                    }
                }
            ]

        });
        return data;
    }
    // const data = await stateCityWise();
    const data = await stateCityWise2();
    res.send(data);
});
app.listen(4000, () => {
    console.log("Server Start");
})
