const knex = require('knex');
var knexConfig = knex({
    client: 'mysql2',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "node_relation"
    }
});
module.exports = knexConfig;
