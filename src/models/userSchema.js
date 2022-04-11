const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
        required: false
    },
    profilePicture: {
        type: String,
        required: false//ALTERAR ISSO AQUI
    },
    pcd: {
        type: Boolean,
        required: false
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
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('user', userSchema, 'user');
//module.exports = mongoose.model('skill', skillSchema, 'skill'); // 1 parametro nome da coleção, 2 schema que vai usar, 3 repetir nome

/*
{
"name": "User PROJETO FINAL",
"email": "user1@email.com",
"password": "12345",
"birthDate": "01/01/2001",
"gender": "female",
"profilePicture": "foto bonita",
"pcd": "false",
"phoneNumber":"987654321",
"linkedin": "linkedin.com/user1",
"anotherLink": "outrolink.com"
}
*/