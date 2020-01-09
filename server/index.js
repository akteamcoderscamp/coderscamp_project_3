const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const auth = require('./routes/auth');
const vehicles = require('./routes/vehicles');
const users = require('./routes/users');
const routes = require('./routes/routes');
const routeLogs = require('./routes/routeLogs');

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0-b6aon.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB',err));

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/vehicles', vehicles);
app.use('/api/routes', routes);
app.use('/api/routeLogs', routeLogs);
app.use('/api/users', users);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
