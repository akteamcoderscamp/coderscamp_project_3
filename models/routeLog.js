const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {vehicleRouteSchema} = require('./vehicleRoute');

const routeLogSchema = new mongoose.Schema({
    date: {type: Date, required: true },
    route: {type: String, required: true },
    km: {type: Number, required: true },
    vehicle: { type: String, required: true },
    invoice: { type: Number },
    status: { type: String, required: true, enum: ['In Progress', 'Closed', 'Rejected'] },
});

routeLogSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const RouteLog = mongoose.model('RouteLog', routeLogSchema);

exports.RouteLog = RouteLog; 