const express=require('express');
const router = express.Router();
const groupsController=require('../controllers/groupsController')


router.post('/api/groups',groupsController.insertGroupsData)
router.get('/api/groups',groupsController.getGroups)
router.put('/api/groups',groupsController.updateData)

module.exports =router;