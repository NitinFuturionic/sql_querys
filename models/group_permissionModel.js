const client = require("./db");

async function Table() {
    await client.query(`
        create table if not exists group_permission(
            group_id integer references groups(id),
            Permission_id integer references Permissions(id),
            primary key (group_id,Permission_id)
        );`);

    }

Table()
  .then(() => console.log("group_permission table created"))
  .catch((err) => console.log("Error creating group_permission table", err));

  module.exports = {
  insertGroup_permissionData: async (group_id,Permission_id) => {
    return client.query("insert into group_permission ( group_id,Permission_id ) VALUES ($1,$2)", [
        group_id,Permission_id
    ]);
  },
  getGroup_permission: async () => {
    return client.query("select * from group_permission");
  },
};
