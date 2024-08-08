const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Nitin@1234#",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to pg"))
  .catch(() => console.log("Error to Connect pg"));

module.exports = client;
