const admin = require('../middleware/admin')
const auth = require('../middleware/auth')
const {VehicleRoute} = require('../models/vehicleRoute')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const vehicleRoutes = await VehicleRoute.find().sort('id');
    res.send(vehicleRoutes);
});

router.get('/:id', async (req, res) => {
    try {
        const vehicleRoute = await VehicleRoute.findById(req.params.id);
        if (!vehicleRoute) return res.status(404).send('The route was not found 😲');
        res.send(vehicleRoute);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 Not correct ID');
    }
});

router.post('/', auth, async (req, res) => {

    const vehicleRoute = new VehicleRoute({
        name: req.body.name,
        vehicle: req.body.vehicle,
        starting: req.body.starting,
        destination: req.body.destination,
        km: req.body.km,
        fuel: req.body.fuel,
        comments: req.body.comments
    });
    try{
        let response = await vehicleRoute.save();
        res.send(response);
    }catch(err){
        res.send(err.message);
    }
});

router.delete('/:id', [auth, admin], async (req, res) => {
    try {
        const vehicleRoute = await VehicleRoute.findByIdAndRemove(req.params.id);
        if (!vehicleRoute) return res.status(404).send('The route was not found 😲 \n I cannot delete it 😒');
        res.send(vehicleRoute);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 \n I cannot delete it 😒 Not correct ID');
    }
});

module.exports = router;