const db = require('../models')
const Sequelize = db.Sequelize
const { User } = db.sequelize.models

const jwt = require('jsonwebtoken')
const bcyrpt = require('bcrypt')
const mailValidator = require('email-validator')
const passwordValidator = require('password-validator')

// const tokened = user => {
//     token = jwt.sign({ userId: user.id },
//     'RANDOM_TOKEN_SECRET',
//     { expiresIn: '24h' })
//     return { user, token }
// }

// app.post('/signup', (req, res) => {
//     res.send({ message: `Welcome ${req.body.firstName}, have fun!`})
// })

var schema = new passwordValidator(); //Schema for password creation
 
schema
.is().min(6)                                    // Minimum length 6
.is().max(20)                                  // Maximum length 20
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Spaces are invalid
.is().not().oneOf(['Passw0rd', 'Password123']); // Invalid password inputs

exports.getUsers = (req, res, next) => {    
    db.User.findOne({ where: { id: req.params.id }})
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(404).json({ error }))
}

exports.signup = (req, res, next) => {
    let {first, lastName, email, password } = req.body
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            return res.status(404).json({ error: "User account already signed up, please login!" })
        } else if (!mailValidator.validate(req.body.email) && !schema.validate(req.body.password)) {
            throw res.status(401).json({ error: "Invalid input please make sure include valid email; e.g. john@mail.com, and password with 6-20 characters including a lowercase and uppercase keys, a digit and no spaces!" })
        } else {
            bcyrpt
            .hash(req.body.password, 10)
            .then(hash => {
                db.User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash
                })
            })
            .then(user => res.status(201).json(tokened(user)))
            .catch(error => res.status(401).json({ error: error }))
        }
    })
}