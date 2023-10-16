const router = require('express').Router();
const { testing, users } = require('./controllers');

// users
router.post('/login', users.login);

// Account router
router.get('/testing', testing.getData);
router.get('/testing/:id', testing.checkId, testing.getDataById);
router.post('/testing', testing.insertData);
router.put('/testing/:id', testing.checkId, testing.updateData);
router.delete('/testing/:id', testing.checkId, testing.deleteData);

module.exports = router;