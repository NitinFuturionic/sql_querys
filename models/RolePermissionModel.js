const client = require("./db");

async function Table() {
    await client.query(`
        create table if not exists RolePermission(
            role_id integer references roles(id),
            Permission_id integer references Permissions(id),
            primary key (role_id,Permission_id)

        );`);
    }

Table()
  .then(() => console.log("RolePermission table created"))
  .catch((err) => console.log("Error creating RolePermission table", err));

  module.exports  = {
  insertRolePermissionData: async (role_id,Permission_id) => {
    return client.query("insert into RolePermission (role_id,Permission_id) VALUES ($1,$2)", [
        role_id,Permission_id
    ]);
  },
  getRolePermission: async () => {
    return client.query("select * from RolePermission");
  },
};
