const admin = require('../middleware/admin')
const auth = require('../middleware/auth')
const { RouteLog } = require('../models/routeLog')
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', async (req, res) => {
    const routeLogs = await RouteLog.find().sort('route_name');
    res.send(routeLogs);
});

router.get('/:id', async (req, res) => {
    try {
        const routeLog = await RouteLog.findById(req.params.id);
        if (!routeLog) return res.status(404).send('The vehicle Route was not found 😲');
        res.send(routeLog);
    } catch (err) {
        return res.status(404).send('The vehicle Route was not found 😲 Not correct ID');
    }
});

router.post('/', async (req, res) => {
    const routeLog = new routeLog({
        route_name: req.body.route_name,
        vehicle_plate: req.body.vehicle_plate,
        driver_email: req.body.driver_email,
        date: req.body.date,
        invoice: req.body.invoice,
        status: req.body.status
    });
    try {
        let response = await routeLog.save();
        res.send(response);
    } catch (err) {
        res.send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const routeLog = await RouteLog.findByIdAndRemove(req.params.id);
        if (!routeLog) return res.status(404).send('The route route was not found 😲 \n I cannot delete it 😒');
        res.send(routeLog);
    } catch (err) {
        return res.status(404).send('The route route was not found 😲 \n I cannot delete it 😒 Not correct ID');
    }
});

router.put('/:id', bodyParser.json(), async (req, res) => {
    try {
        const routeLog = await RouteLog.findByIdAndUpdate(req.params.id,
            {
                route_name: req.body.route_name,
                vehicle_plate: req.body.vehicle_plate,
                driver_email: req.body.driver_email,
                date: req.body.date,
                invoice: req.body.invoice,
                status: req.body.status
            }, { new: true });
        if (!routeLog) return res.status(404).send('The route was not found 😲');
        res.send(routeLog);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 Not correct ID');
    }
})

module.exports = router;