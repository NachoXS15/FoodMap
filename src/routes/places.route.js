const express = require('express');
const router = express.Router();
const { getPlacesController,
        patchPlacesController,
        postPlacesController,
        getPlacesIdController } = require('../controllers/places.controller')


// get all items
router.get('/', getPlacesController);
//get item by id
router.get('/:id', getPlacesIdController)
//create an item
router.post('/', postPlacesController);
//update an item
router.patch('/', patchPlacesController);


module.exports = router;
