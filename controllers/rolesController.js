const RolesModel= require('../models/rolesModel');


module.exports={
    insertRolesData:async(req,res)=> {
        const {role_name}=req.body
        try{
            const result= await RolesModel.insertRolesData(role_name);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getRoles: async (req, res)=> {
        try {
            const result =await RolesModel.getRoles();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    },
    updateData:async (req,res) => {
        const {id, role_name}=req.body
        try {
            const result =await RolesModel.updateData(id, role_name);
            res.json(result);
            console.log("Roles Data updated");
        }
        catch (err) {
            console.log("Error Data updated",err);
        }
    }


}