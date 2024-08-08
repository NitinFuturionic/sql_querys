const GroupsModel= require('../models/groupsModel');
const { updateData } = require('./usersController');


module.exports={
    insertGroupsData:async(req,res)=> {
        const {group_name}=req.body
        try{
            const result= await GroupsModel.insertGroupsData(group_name);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getGroups: async (req, res)=> {
        try {
            const result =await GroupsModel.getGroups();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    },
    updateData: async (req,res)=> {
        const {id,group_name}=req.body;
        try{
            const result=await GroupsModel.updateData(id,group_name) ;
            res.json(result);
            console.log("Data updated successfully ");
        }
        catch(err) {
            console.log("Error ",err);
        }
    }

}