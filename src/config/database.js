//ARQUIVO RESPONSAVEL POR CONECTAR O BANCO DE DADOS

const mongoose = require('mongoose')

const MONGODB_URI = "mongodb+srv://beatavernaro:pirilampo3@projetofinal.ennxn.mongodb.net/projetoFinalTera?retryWrites=true&w=majority" //NO USER É O NOME DO DATABASE CRIADO NO MONGO
//https://cloud.mongodb.com/v2/623a50438f509a77f748c9b5#metrics/replicaSet/623a513fd5113c04ea13cc60/explorer/projetoFinalTera/user/find
const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco projeto final conectado (:")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}
