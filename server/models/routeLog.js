const config = require('config');
const mongoose = require('mongoose');

const routeLogSchema = new mongoose.Schema({
    route_name: {type: String, required: true },
    vehicle_plate: {type: String, required: true }, 
    driver_email: {type: String, required: true }, 
    date:{type:Date, required:true},
    invoice: { type: Number, required:true },
    status: { type: String, required: true, enum: ['In Progress', 'Closed', 'Rejected'] },
});


const RouteLog = mongoose.model('RouteLog', routeLogSchema);

exports.RouteLog = RouteLog;