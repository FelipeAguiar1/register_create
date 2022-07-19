const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ message: 'ok'});
})

module.exports = app => app.use('/projects', router);