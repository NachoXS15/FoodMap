const express = require('express');
const router = express.Router();
const {errorHandler} = require('../middelwares/errorHandler.middleware')
const { getPlacesController,
        patchPlacesByIdController,
        postPlacesController,
        getPlacesIdController,
        deletePlaceController } = require('../controllers/places.controller')


// get all items
router.get('/', getPlacesController, errorHandler);
//get item by id
router.get('/:id', getPlacesIdController, errorHandler)
//create an item
router.post('/', postPlacesController, errorHandler);
//update an item
router.patch('/:id', patchPlacesByIdController, errorHandler);
//delete an item
router.delete ('/:id', deletePlaceController, errorHandler);


module.exports = router;
