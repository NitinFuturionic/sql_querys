const user_roleModel= require('../models/user_roleModel');


module.exports={
    insertUser_roleData:async(req,res)=> {
        const {user_id,role_id}=req.body
        try{
            const result= await user_roleModel.insertUser_roleData(user_id,role_id);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getUser_role: async (req, res)=> {
        try {
            const result =await user_roleModel.getUser_role();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

}