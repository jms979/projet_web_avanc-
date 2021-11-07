const express = require('express')
const router = express.Router()
const train = require('../data/data.json')
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'easytrain' // add database name
})

client.connect()

/**
 * Cette route inscrit un utilisateur.
 */
router.post('/register', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const email = req.body.email.toLowerCase();
    const password = req.body.password

    const sqlUsername = "SELECT * FROM users WHERE username=$1"
    const checkUsername = await client.query({
        text: sqlUsername,
        values: [username]
    })

    if (checkUsername.rowCount !== 0) {
        res.status(400).json({ message: 'username already taken.' })
        return
    }

    const sqlEmail = "SELECT * FROM users WHERE email=$1"
    const checkEmail = await client.query({
        text: sqlEmail,
        values: [email]
    })

    if (checkEmail.rowCount !== 0) {
        res.status(401).json({ message: 'email already taken.' })
        return
    }

    const hash = await bcrypt.hash(password, 10)
    const addUserSql = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)'
    await client.query({
        text: addUserSql,
        values: [username, email, hash]
    })

    const userData = await client.query({
        text: sqlUsername,
        values: [username]
    })
    req.session.userId = userData.rows[0].id
        // on envoie le user ajouté à l'utilisateur
    res.json(userData.rows[0].id)
})

/**
 * Cette route permet de se connecter.
 */
router.post('/login', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password

    const sqlUser = "SELECT * FROM users WHERE email=$1 OR username =$1"
    const checkExists = await client.query({
        text: sqlUser,
        values: [username]
    })

    if (checkExists.rowCount === 0) {
        res.status(400).json({ message: 'user doesn\'t exists' });
        return
    }

    if (await bcrypt.compare(password, checkExists.rows[0].password)) {
        req.session.userId = checkExists.rows[0].id
            // on envoie la team de pokémons du user au client.
        return res.json(req.session.userId)
    } else {
        return res.status(401).json({ message: 'wrong password' })

    }
})

router.post('/logout', (req, res) => {
    if (typeof req.session.userId === 'undefined' || req.session.userId === -1) {
        res.status(401).json({ message: 'user not connected' })
        return (res.json(req.session.userId))
    } else {
        req.session.destroy();
        return res.status(200).json({ message: 'user disconnected' })
    }


})

/**
 * Cette route permet de retourner l'utilisateur connecté.
 */
router.get('/me', async(req, res) => {
    if (typeof req.session.userId === 'undefined' || req.session.userId === -1) {
        res.status(401).json({ message: 'user is not connected' })
    }

    const sql = "SELECT * FROM users WHERE id=$1"
    const userSQL = await client.query({
        text: sql,
        values: [req.session.userId]
    })

    if (userSQL.rowCount === 0) {
        res.status(400).json({ message: 'user doesn\'t exists' })
        return
    }

    // on envoie le user connecté à l'utilisateur
    const user = {
        id: userSQL.rows[0].id,
        email: userSQL.rows[0].email
    }
    res.json(user)
    return
})
//route qui retourne la listes des trajets de train
router.post('/research', (req, res) => {
    const depart = req.body.depart
    const arrive = req.body.arrive
    const jour = req.body.jour
    const prem = []
    const list_train =[]
    const list_jour = []
    for (let i =0;i<train.length; i++){
        if (train[i].lieu_depart === depart){
            prem.push(train[i])
        }
    }
    for (let i =0;i<prem.length; i++){
        if (prem[i].ville_arrive === arrive){
            list_train.push(prem[i])
        }
    }

    for (let i =0;i<list_train.length; i++) {
        if (list_train[i].jour === jour) {
            list_jour.push(list_train[i])
        }
    }
    return res.json({list_jour})

})
//route  qui ajoute un billet de train au panier
router.post('/pay', (req, res) => {
    console.log("achat en cours")
    const re = req.body
    return  res.status(200).json({ re })
})
module.exports = router