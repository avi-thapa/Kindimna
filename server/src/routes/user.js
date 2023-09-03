const User = require("../models/user")
const express = require('express')
const router = express.Router()
const UserController = require("../controllers/user")

router.post('/register', UserController.registerNewUSer)

router.post('/login', UserController.LoginUser)
   
   
    router.put('/users/:id', UserController.userEditById)
   
    router.delete('/users/:id', UserController.userDeleteById)
   
   
   router.get('/users/:id', UserController.userGetByID)

   
module.exports = router