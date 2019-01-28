const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Event = require('./models/event');
const Registration = require('./models/registration');


app.set('view engine', 'ejs');
app.use(express.static('assets'))
app.use(express.urlencoded());

// Home Page
app.get('/', function(req, res){

    Event.find({}, function(err, events){
        if (err){
            console.log('error in finding events');
        }
        return res.render('home', {
            events: events
        })
    });

});

// Admin Panel

// 1. Create event
app.post('/events/create', function(req, res){
    console.log(req.body);
    Event.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    }, function(err, event){
        if (err){
            console.log('Error in creating an event');
        }

        console.log('Event Created : ', event);
        return res.redirect('back');
    });
});


// 3. Delete event




// create APIs
// 1. List of all events


// 2. Details of an event (with comments, sessions, registrations)


// 3. Add registration


// 4. Delete registration










app.listen(port, function(err){
    if (err){
        console.log(`There's an error in firing up the server`);
        return;
    }

    console.log(`Server is up on port: ${port}`);
})