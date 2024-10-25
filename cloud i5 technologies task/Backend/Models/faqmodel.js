const mongoose = require('mongoose');

const Faqschema = new mongoose.Schema({
    question: {type:String},
    answer:{type:String}
})

module.exports = mongoose.model('FaqCollection',Faqschema)