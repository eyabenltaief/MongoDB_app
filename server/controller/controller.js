var Employes = require('../model/model');
const mongoose = require('mongoose');
const { ObjectID } = require('bson');

//create and save new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty' });
        return;
    }

    //new employes
    var id = new mongoose.Types.ObjectId();
    const employes = new Employes({
        _id: id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        anciennete: req.body.anciennete,
        adresse: {
            numero: req.body.numero,
            codepostale: req.body.codepostale,
            ville: req.body.ville
        },
        tel: req.body.tel,
        prime: req.body.prime,
    })

    //save employes in the database
    employes
        .save(employes)
        .then(data => {
            //res.send(data);
            res.redirect('/add_user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error'
            })

        })
}

//reteive and return all users/ retrive and return a single user
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Employes.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: 'Not found user with id' + id })
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: 'Error retreiving user with id ' + id })
            })
    } else {
        Employes.find()
            .then(employes => {
                res.send(employes)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Ocured while retrivig employes information" })
            })
    }
}


//Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data to update can not be empty' })
    }

    const id = req.params.id;
    Employes.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannot Update user, Maybe user not found!' })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Error Update' });
        })
}

//Delete a user with specified user in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employes.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(400).send({ message: 'Connot Delete with id, Maybe not be found!' })
            } else {
                res.send({
                    message: 'User was deleted successufly'
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Could not delete User with id= ' + id })
        });
}