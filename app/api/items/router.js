const express = require('express');
const router = express.Router();
const { createItem, getOne, updateItem, destroy, move } = require('./controller');
const { validateCreate, validateOne, validateUpdate, validateMove } = require('./validation');

router.post('/items', validateCreate, createItem);
router.get('/items/:id', validateOne, getOne);
router.put('/items/:id', validateUpdate, updateItem);
router.put('/items/:id/move', validateMove, move);
router.delete('/items/:id', validateOne, destroy);

module.exports = router;
