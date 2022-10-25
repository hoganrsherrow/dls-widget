const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// Express Middleware()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// sends to controllers for routing
app.use(require('./controllers/'));

// Start up the server
app.listen(PORT, () => {
    console.log(`DLS-WIDGET now listening on port ${PORT}.`);
});