const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});


// Express Middleware()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Start up the server
app.listen(PORT, () => {
    console.log(`DLS-WIDGET now listening on port ${PORT}.`);
})