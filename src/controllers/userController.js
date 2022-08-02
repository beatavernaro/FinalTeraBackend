const userSchema = require("../models/userSchema")
const res = require("express/lib/response");
const mongoose = require("mongoose");

const getAll = async (req, res) => {
    try {
        const allUsers = await userSchema.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const createUser = async (req, res) => {
    try {
        const newUser = new userSchema({
            _id: new mongoose.Types.ObjectId(),
            userName: req.body.name,
            email: req.body.email,
            /*password: req.body.password,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            profilePicture: req.body.profilePicture,
            pcd: req.body.pcd,
            phoneNumber: req.body.phoneNumber,
            linkedin: req.body.linkedin,
            anotherLink: req.body.anotherLink,
            createdAt: new Date() */
        })

        const savedUser = await newUser.save()

        res.status(200).json({
            message: "User adicionado com sucesso!",
            savedUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
            
        })
    }
}


module.exports = {
    getAll,
    createUser
}