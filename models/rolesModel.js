const client = require("./db");

async function Table() {
  await client.query(`
            create table if not exists roles(
                id serial primary key,
                role_name varchar(20) unique not null
            );`);
}

Table()
  .then(() => console.log("roles table created"))
  .catch((err) => console.log("Error creating roles table", err));

  module.exports  = {
  insertRolesData: async (role_name) => {
    return client.query("insert into roles ( role_name ) VALUES ($1)", [
      role_name
    ]);
  },
  getRoles: async () => {
    return client.query("select * from roles");
  },
  updateData : async ( id ,role_name)=> {
    return client.query("update roles set role_name=$1, where id=$2 ",[role_name,id])

  },
};
