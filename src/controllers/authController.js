const express = require('express');
const User = require('../models/user');
const bcrypet = require('bcryptjs');
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const authConfig = require('../config/auth');
=======
const authConfig = require('../config/auth')
>>>>>>> 4527c8a09a498f73e07f46f161a6545fe76600ad

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists'});

        const user = await User.create(req.body);
        
        user.password = undefined;
<<<<<<< HEAD
        
=======
>>>>>>> 4527c8a09a498f73e07f46f161a6545fe76600ad
        return res.send({ 
            user,
            token: generateToken({ id: user.id })
        });
    } catch (error) {
        return res.status(400).send({ error: 'Erro no registro' });
    }
});

router.post('/authenticate', async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if (!user)
        return res.status(400).send({ error: 'User not found' });

    if (!await bcrypet.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password'});

    user.password = undefined;
<<<<<<< HEAD
    
    res.send({ 
=======

    res.send({
>>>>>>> 4527c8a09a498f73e07f46f161a6545fe76600ad
        user,
        token: generateToken({ id: user.id })
    });
})

module.exports = app => app.use('/auth', router);