const client = require("./db");

async function Table() {
    await client.query(`
        create table if not exists usergroup (
            user_id integer references users(id),
            group_id integer references groups(id),
            primary key (user_id , group_id)
        );`);
    }

Table()
  .then(() => console.log("usergroup table created"))
  .catch((err) => console.log("Error creating usergroup table", err));

  module.exports = {
  insertUsergroupData: async (user_id,group_id) => {
    return client.query("insert into usergroup (user_id, group_id) VALUES ($1,$2)", [
        user_id, group_id
    ]);
  },
  getUsergroup: async () => {
    return client.query("select * from usergroup");
  },
};
