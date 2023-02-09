const axios = require('axios').default;
const config = require('config');
const PlacesService = require('../services/places/places.service')


//get all items
async function getPlacesController(req, res, next){
    try {
        const places = await PlacesService.getPlaces();
        res.json(places)
    } catch (error) {
        next(error)
    }
};

//get items by id
async function getPlacesIdController(req, res, next){
    try {
        const {id} =req.params
        const place = await PlacesService.getPlaceById(id);
        res.json(place)
    } catch (error) {
        next(error)
    }
};

//create item
async function postPlacesController(req, res, next){
    const data = req.body
    try {
        const place = await PlacesService.savePlaces(data);
        res.json(place)
    } catch (error) {
        next(error)
    }
};

async function patchPlacesController(req, res, next){
    const data = req.body;
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    getPlacesController,
    postPlacesController,
    patchPlacesController,
    getPlacesIdController
    
};