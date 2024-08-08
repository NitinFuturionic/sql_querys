const Group_permissionModel= require('../models/group_permissionModel');


module.exports={
    insertGroup_permissionData:async(req,res)=> {
        const {group_id,Permission_id}=req.body
        try{
            const result= await Group_permissionModel.insertGroup_permissionData(group_id,Permission_id);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getGroup_permission: async (req, res)=> {
        try {
            const result =await Group_permissionModel.getGroup_permission();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

}