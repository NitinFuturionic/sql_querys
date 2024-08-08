const RolePermissionModel= require('../models/RolePermissionModel');


module.exports={
    insertRolePermissionData:async(req,res)=> {
        const {role_id,Permission_id}=req.body
        try{
            const result= await RolePermissionModel.insertRolePermissionData(role_id,Permission_id);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getRolePermission: async (req, res)=> {
        try {
            const result =await RolePermissionModel.getRolePermission();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

}