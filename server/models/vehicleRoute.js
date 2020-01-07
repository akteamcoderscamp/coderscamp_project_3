const config = require('config');
const mongoose = require('mongoose');

const vehicleRouteSchema = new mongoose.Schema({
    route_name: {type: String, required: true },
    vehicle_plate: {type: String, required: true }, //vehicle plates
    driver_email: {type: String, required: true }, //driver e-mail
    date:{type:Date, required:true},
    km: {type: Number, required: true },
    fuel: {type: Number, required: true },
    isFinished:{type: Boolean, required: true},
    comments: String
});


const VehicleRoute = mongoose.model('vehicleRoute', vehicleRouteSchema);

exports.VehicleRoute = VehicleRoute;