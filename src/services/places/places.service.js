const {Place} = require('../models/places.models');


//get elements operation
async function getPlaces() {
    try {
        const places = await Place.find();
        return places
    } catch (error) {
        throw error; 
    }
}
//get elements operation
async function getPlaceById(id) {
    try {
        const place = await Place.findById(id);
        return place
    } catch (error) {
        throw error; 
    }
}


//create an element operation
async function savePlaces(data) {
    try {
        const place = new Place(data);
        await place.save();
        return {
            operation: 'ok'
        }
    } catch (error) {
        throw error
    }
}

async function updatePlaces(data) {
    const {body:{id}} = req;
    try {
        const place = await Place.findById()
    } catch (error) {
        throw error
    }
}

module.exports = {
    getPlaces,
    savePlaces,
    updatePlaces,
    getPlaceById
}