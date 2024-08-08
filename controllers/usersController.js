const usersModel = require("../models/usersModel");
const { connect } = require("../routes/usersRoutes");

module.exports = {
  insertUsersData: async (req, res) => {
    // console.log(username);
    const { username, email, password } = req.body;
    try {
      const result = await usersModel.insertUsersData(
        username,
        email,
        password
      );
      res.json(result);
      console.log("Data inserted");
    } catch (err) {
      console.log("Error inserting data", err);
    }
  },
  getUsers: async (req, res) => {
    try {
      const result = await usersModel.getUsers();
      console.log("fetching data  controller ");
      res.json(result);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  },
  updateData: async (req, res) => {
    const { id, username, email, password } = req.body;
    try {
      const result = await usersModel.updateData(id, username, email, password);
      res.json(result);
      console.log("User data updateed successfully ");
    } catch (err) {
console.log("Error updating data  ",err)
    }
  },
  DeleteData: async (req, res) => {
    try {
      const result = await usersModel.DeleteData();
      res.json(result);
      console.log(" Deleted the all records");
    } catch (err) {
      console.log("Error in deleting the data", err);
    }
  },
};
