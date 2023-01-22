const mongoose = require('mongoose');
const { ObjectID } = require('bson');


const Adresse = {
    numero: Number,
    codepostale: Number,
    ville: String,
}


const employesSchema = new mongoose.Schema({
    _id: ObjectID,
    nom: String,
    prenom: String,
    anciennete: Number,
    adresse: {
        numero: Number,
        codepostale: Number,
        ville: String,
    },
    tel: Number,
    prime: Number,
});

const Employes = mongoose.model('employes', employesSchema);

module.exports = Employes;