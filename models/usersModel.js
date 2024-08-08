const client = require('./db');

async function Table() {
  await client.query(`
            create table if not exists users(
            id serial primary key,
            username varchar(20)unique not null,
            email varchar(20) unique not null,
            password varchar(20) not null
          );`);
}

Table()
  .then(() => console.log("Users table created"))
  .catch((err) => console.log("Error creating users table", err));

module.exports = {
  insertUsersData: async (username, email, password) => {
    return client.query(
      "insert into users ( username, email, password ) VALUES ($1, $2, $3)",
      [username, email, password]
    );
  },
  getUsers: async () => {
    console.log("fetching data  model");
    return client.query("select * from users");
  },
  updateData : async ( id ,username,email,password)=> {
    return client.query("update users set username=$1,email=$2,password=$3 where id=$4 ",[username,email,password,id])

  },
  // DeleteData : async ()=> {
  //   return client.query("delete from users")
  // }
};

