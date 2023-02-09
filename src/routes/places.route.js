const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middelwares/errorHandler.middleware')
const { getPlacesController,
        patchPlacesByIdController,
        postPlacesController,
        getPlacesIdController } = require('../controllers/places.controller')


// get all items
router.get('/', getPlacesController, errorHandler);
//get item by id
router.get('/:id', getPlacesIdController, errorHandler)
//create an item
router.post('/', postPlacesController, errorHandler);
//update an item
router.patch('/:id', patchPlacesByIdController, errorHandler);


module.exports = router;
