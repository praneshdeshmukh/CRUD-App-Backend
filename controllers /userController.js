const User = require('../models/userModel.js');

exports.home = (req,res) => {
    res.send('Hello World!');
}

exports.createUser = async (req,res)=> {
    // extract info from body which frontend sends
    try { 
        const {name,email} = req.body // req brings alot of functionality with it
        // await create user in db first for that import
        // model from userModel.js


        if(!name || !email) {
            throw new Error("Name and Email required!")
        }

        const userExists = User.findOne({email});
        if (userExists) {
            throw new Error("User already Exists!")
        }
        const user = await User.create({ 
            // this will automatically get saved in your db
            // new entries are created.
            name, // name: name,
            email, // email:email,
        })

        res.status(201).json({
            success: true,
            message: "User created Successfully!",
            user // to know kya kya araha hai user main
            // we can also send headers,etc
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
            // user // user toh hai hi nai, kyunki error agya hai
        })
    }
}

exports.getUsers = async (req,res) => {
    try {

        const allUsers = await User.find({})
        // if(!allUsers) {
        if (allUsers.length == 0) {
            res.status(400).json({
            success: false,
            message: "USERs not FOUND",
            })
        }
        res.status(200).json({
            success: true,
            message : "User data fetched Successfully!" , 
            allUsers,
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
            // user // user toh hai hi nai, kyunki error agya hai
        })
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const userId = req.params.id; // to fetch data from url
        // params = parameter (returns an object)


        const userDeleted = await User.findByIdAndDelete(userId);


        res.status(200).json({
            success: true,
            message: "User deleted SUCCESSFULLY"
        })


    } catch (error) {
        
        console.log(error)
        
        
        res.status(400).json({
            success: false,
            message: "user cannot be deleted!",
 
        })
 
 
    }
}

exports.edituser = async (req,res) => {
    try {
        const whatToFind = req.params.id;
        const whatToUpdate = req.body;

        const updateUser = await User.findByIdAndUpdate(whatToFind, whatToUpdate);
        
        res.status(200).json({
            success: true,
            message: "user updated successfully!",

        })

    } catch (error) {
        
        console.log(error)

        res.status(400).json({
            success: false,
            message: "user cannot be Updated!",
            // user // user toh hai hi nai, kyunki error agya hai
 
        })
 
 
    }
}
