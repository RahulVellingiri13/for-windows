const router = require ('express');

const APP_SERVER = router()

APP_SERVER.use('/api',require('./Routes/formroutes'));
APP_SERVER.use('/api',require('./Routes/faqroutes'));


module.exports = APP_SERVER;