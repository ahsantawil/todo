const express = require('express');
const router = express.Router();
const {getAll, createTodo, getOne, updateTodo, destroy} = require('./controller');
const { validateCreate, validateOne, validateUpdate } = require('./validation');

router.get('/todos', getAll);
router.post('/todos', validateCreate, createTodo);
router.get('/todos/:id', validateOne, getOne);
router.put('/todos/:id', validateUpdate, updateTodo);
router.delete('/todos/:id', validateOne, destroy);

module.exports = router;
