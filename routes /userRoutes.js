const express = require('express')

//import methods from userController.js
const {home,createUser,getUsers,deleteUser,edituser} = require('../controllers/userController.js')

// create Router 
const router = express.Router()

router.get('/',home); // get data from db
router.post('/createuser',createUser) // send data to db
router.get('/getusers', getUsers)
// router.put
// router.patch
router.delete('/deleteuser/:id',deleteUser);
router.put('/edituser/:id', edituser);
// export router
module.exports = router
