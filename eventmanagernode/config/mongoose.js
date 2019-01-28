const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/eventmanager_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to Event Manager DB'));

db.once('open', function(){
    console.log('Connected to event manager db');
});