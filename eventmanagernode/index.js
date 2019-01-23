const express = require('express');
const app = express();
const port = 8000;











app.listen(port, function(err){
    if (err){
        console.log(`There's an error in firing up the server`);
        return;
    }

    console.log(`Server is up on port: ${port}`);
})