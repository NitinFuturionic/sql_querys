const client = require("./db");
const { updateData } = require("./rolesModel");

async function Table() {
    await client.query(`
        create table if not exists groups (
            id serial primary key,
            group_name varchar(20) unique not null
        );`);

    }

Table()
  .then(() => console.log("groups table created"))
  .catch((err) => console.log("Error creating groups table", err));

  module.exports = {
  insertGroupsData: async (group_name) => {
    return client.query("insert into groups ( group_name ) VALUES ($1)", [
        group_name
    ]);
  },
  getGroups: async () => {
    return client.query("select * from groups");
  },
  updateData:async (id,group_name) => {
    return client.query("update groups set group_name=$1 where id=$4 ",[group_name,id])
  }
};
