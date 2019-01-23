const mongoose = require('mongoose');



const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }
},
{
    timestamps: true
});


const Registration = mongoose.model('Registration', registrationSchema); 

module.exports = Registration;