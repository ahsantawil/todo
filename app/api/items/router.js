var express = require('express');
var router = express.Router();
const {createItem, getOne, updateItem, destroy} = require('./controller');
//const { validateCreate, validateOne, validateUpdate } = require('./validation');

router.post('/items', createItem);
router.get('/items/:id', getOne);
router.put('/items/:id', updateItem);
router.delete('/items/:id', destroy);

module.exports = router;
