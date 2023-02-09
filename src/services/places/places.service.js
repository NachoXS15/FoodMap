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

async function updatePlaceById(id, data) {
    try {
        const {name, score, hood} = data;
        const place = await Place.findById(id);
        place.name = name;
        place.score = score;
        place.hood = hood;
        await place.save();
        return {
            operation: "ok"
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPlaces,
    savePlaces,
    updatePlaceById,
    getPlaceById
}