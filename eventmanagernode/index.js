const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Event = require('./models/event');
const Registration = require('./models/registration');


app.set('view engine', 'ejs');
app.set('json spaces', 2);
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


// 3. Delete event --> Assignment (hint, you have the event id, just need to find and delete with it)




// create APIs
// 1. List of all events
app.get('/api/events', function(req, res){
    Event.find({}, function(err, events){
        return res.json(events);
    });
});


// 2. Details of an event (with comments, sessions, registrations)
app.get('/api/events/:id', function(req, res){
    Event.findById(req.params.id).populate('registrations').exec(function(err, event){
        return res.json(event);
    });
});


// 3. Add registration
app.post('/api/registrations/create/:event_id', function(req, res){
    Event.findById(req.params.event_id, function(err, event){
        Registration.create({
            name: req.body.name,
            email: req.body.email,
            event: event.id
        }, function(err, registration){
            event.registrations.push(registration);
            event.save()
            return res.json(registration);
        });

    });
});


// 4. Delete registration --> Assignment










app.listen(port, function(err){
    if (err){
        console.log(`There's an error in firing up the server`);
        return;
    }

    console.log(`Server is up on port: ${port}`);
})