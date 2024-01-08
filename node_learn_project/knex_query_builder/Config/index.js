const knex = require('knex');
dbConfig = knex({
    client: 'mysql2',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "node_knex"
    }
});
module.exports = dbConfig;