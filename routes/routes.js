const admin = require('../middleware/admin')
const auth = require('../middleware/auth')
const { Route } = require('../models/route')
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', async (req, res) => {
    const routes = await Route.find().sort('name');
    res.send(routes);
});

router.get('/:id', async (req, res) => {
    try {
        const route = await Route.findById(req.params.id);
        if (!route) return res.status(404).send('The route was not found 😲');
        res.send(route);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 Not correct ID');
    }
});

router.post('/', async (req, res) => {
    const route = new Route({
        name: req.body.name,
        starting: req.body.starting,
        destination: req.body.destination,
        km: req.body.km
    });
    try {
        let response = await route.save();
        res.send(response);
    } catch (err) {
        res.send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const route = await Route.findByIdAndRemove(req.params.id);
        if (!route) return res.status(404).send('The route was not found 😲 \n I cannot delete it 😒');
        res.send(route);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 \n I cannot delete it 😒 Not correct ID');
    }
});

router.put('/:id', bodyParser.json(), async (req, res) => {
    try {
        const route = await Route.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                starting: req.body.starting,
                destination: req.body.destination,
                km: req.body.km
            }, { new: true });
        if (!route) return res.status(404).send('The route was not found 😲');
        res.send(route);
    } catch (err) {
        return res.status(404).send('The route was not found 😲 Incorrect ID');
    }
})

module.exports = router;