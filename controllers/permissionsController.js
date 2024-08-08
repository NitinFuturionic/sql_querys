const PermissionsModel= require('../models/permissionsModel');
const { updateData } = require('./usersController');


module.exports={
    insertPermissionsData:async(req,res)=> {
        const {Permissions_name}=req.body
        try{
            const result= await PermissionsModel.insertPermissionsData(Permissions_name);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getPermissions: async (req, res)=> {
        try {
            const result =await PermissionsModel.getPermissions();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    },
    updateData:async (req,res)=> {
        const {id,Permissions_name}=req.body
        try {
            const result= await PermissionsModel.updateData(id,Permissions_name);
            res.json(result);
            console.log("data updeted successfully ")
        }
        catch(err) {
            console.log("error ",err)
        }
    }

}