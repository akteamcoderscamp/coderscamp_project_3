const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const routeLogSchema = new mongoose.Schema({
    route_name: {type: String, required: true },
    vehicle_plate: {type: String, required: true }, 
    driver_email: {type: String, required: true }, 
    date:{type:Date, required:true},
    invoice: { type: Number, required:true },
    status: { type: String, required: true, enum: ['In Progress', 'Closed', 'Rejected'] },
});

routeLogSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    return token;
}

const RouteLog = mongoose.model('RouteLog', routeLogSchema);

exports.RouteLog = RouteLog; 