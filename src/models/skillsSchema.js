const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId, // cria um id unico para o usuario

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true//ALTERAR ISSO AQUI
    },
    pcd: {
        type: Boolean,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    anotherLink: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});