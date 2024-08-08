const client = require("./db");

async function Table() {
    await client.query(`
        create table if not exists user_role(
            user_id integer references  users(id),
            role_id integer references roles(id),
            primary key(user_id,role_id)
        );`);
    }

Table()
  .then(() => console.log("user_role table created"))
  .catch((err) => console.log("Error creating user_role table", err));

  module.exports  = {
  insertUser_roleData: async (user_id,role_id) => {
    return client.query("insert into user_role ( user_id, role_id) VALUES ($1,$2)", [
        user_id,role_id
    ]);
  },
  getUser_role: async () => {
    return client.query("select * from user_role");
  },
  
};
