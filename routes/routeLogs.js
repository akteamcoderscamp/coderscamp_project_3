const admin = require('../middleware/admin')
const auth = require('../middleware/auth')
const {RouteLog} = require('../models/routeLog')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const routeLogs = await RouteLog.find().sort('id');
    res.send(routeLogs);
});

router.get('/:id', async (req, res) => {
    try {
        const routeLog = await RouteLog.findById(req.params.id);
        if (!routeLog) return res.status(404).send('The log was not found 😲');
        res.send(routeLog);
    } catch (err) {
        return res.status(404).send('The log was not found 😲 Not correct ID');
    }
});

router.post('/', auth, async (req, res) => {

    const routeLog = new RouteLog({
        date: req.body.date,
        route: req.body.route,
        km: req.body.km,
        vehicle: req.body.vehicle,
        invoice: req.body.invoice,
        status: req.body.status
    });
    try{
        let response = await routeLog.save();
        res.send(response);
    }catch(err){
        res.send(err.message);
    }
});

router.delete('/:id', [auth, admin], async (req, res) => {
    try {
        const routeLog = await RouteLog.findByIdAndRemove(req.params.id);
        if (!routeLog) return res.status(404).send('The log was not found 😲 \n I cannot delete it 😒');
        res.send(routeLog);
    } catch (err) {
        return res.status(404).send('The log was not found 😲 \n I cannot delete it 😒 Not correct ID');
    }
});

module.exports = router;