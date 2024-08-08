const UsergroupModel= require('../models/usergroupModel');


module.exports={
    insertUsergroupData:async(req,res)=> {
        const {user_id,group_id}=req.body
        try{
            const result= await UsergroupModel.insertUsergroupData(user_id,group_id);
            res.json(result);
            console.log("Data inserted");

        }
        catch (err) {
            console.log("Error inserting data", err);
        }
    },
    getUsergroup: async (req, res)=> {
        try {
            const result =await UsergroupModel.getUsergroup();
            res.json(result.rows);
        }
        catch (err) {
            console.log("Error fetching data", err);
        }
    }

}