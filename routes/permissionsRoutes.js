const express=require('express');
const router = express.Router();
const permissionsController=require('../controllers/permissionsController');


router.post('/api/permissions',permissionsController.insertPermissionsData )
router.get('/api/permissions',permissionsController.getPermissions)
router.put('/api/permissions',permissionsController.updateData)

module.exports =router;