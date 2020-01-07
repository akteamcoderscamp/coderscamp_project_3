const config = require('config');
const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    starting: { type: String, required: true }, 
    destination: { type: String, required: true },
    km: { type: Number, required: true },
});

const Route = mongoose.model('Route', routeSchema);

exports.Route = Route;