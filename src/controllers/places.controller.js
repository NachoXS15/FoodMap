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


//update data from an item
async function patchPlacesByIdController(req, res, next){
    try {
        const {id} = req.params;
        const data = req.body;
        const place = await PlacesService.updatePlaceById(id, data);
        res.json(place)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getPlacesController,
    postPlacesController,
    patchPlacesByIdController,
    getPlacesIdController
    
};