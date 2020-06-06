// const { Client } = require('pg');

function database() {
  connectionString =
    "postgres://LabEng:LabEngPass@database-labeng.c5cakgnznndl.us-east-2.rds.amazonaws.com:5432/postgres";
  //   const database = new Sequelize(connectionString);
  //   console.log(database);
  return connectionString;
}

module.exports = { database };

// const connectionString = 'postgres://LabEng:LabEngPass@database-lab.ciyvym3yvhge.us-east-2.rds.amazonaws.com:5432/database';
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();
