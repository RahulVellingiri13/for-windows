const router = require ('express');

const APP_SERVER = router()

APP_SERVER.use('/api',require('./Routes/userroutes'));


module.exports = APP_SERVER;