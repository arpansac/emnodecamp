const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sessions: [
        {
            title: String,
            description: String,
            date: Date
        }
    ],
    comments: [
        {
            content: String
        }
    ],
    registrations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Registration'
        }
    ],
},
{
    timestamps: true
});


const Event = mongoose.model('Event', eventSchema); 

module.exports = Event;