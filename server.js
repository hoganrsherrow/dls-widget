const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');


// Express Middleware()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers'));

// Start up the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`DLS-WIDGET now listening on port ${PORT}.`));
});