const client = require("./db");
const { updateData } = require("./rolesModel");

async function Table() {
    await client.query(`
        create table if not exists Permissions(
            id serial primary key ,
            Permissions_name varchar (20) unique not null 
        );`);
    }

Table()
  .then(() => console.log("Permissions table created"))
  .catch((err) => console.log("Error creating Permissions table", err));

  module.exports  = {
  insertPermissionsData: async (Permissions_name) => {
    return client.query("insert into Permissions ( Permissions_name ) VALUES ($1)", [
        Permissions_name
    ]);
  },
  getPermissions: async () => {
    return client.query("select * from Permissions");
  },
  updateData: async (id ,Permissions_name ) => {
    return client.query("update Permissions set Permissions_name=$1, where id=$2 ",[Permissions_name,id])
  }
};
