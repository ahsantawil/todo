const {Todo, Item} = require('../../db/models');

module.exports = {
    
    getAll: async (req, res, next) => {
        try {
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                include: {
                    model: Item,
                    attributes: ['id', 'name', 'TodoId'],
                },
            });
            
            res.status(200).json({
                message : 'success',
                data : result,
            });
        } catch (err) {
           next();
        }
    },

    createTodo: async (req, res, next) => {
        try {
            const { name } = req.body;
            const result = await Todo.create({ name });
            
            res.status(201).json({
                message : 'Add todo success',
                data : result,
            });
        } catch (err) {
            next();
        }
    },
    
    getOne : async (req, res, next) => {
        try {
            const { id } = req.params;
            
            const result = await Todo.findOne({
                where: { id: id },
            });
            
            res.status(200).json({
                message : 'getOne success',
                data : result,
            });
        } catch (err) {
            next();
        }
    },

    updateTodo: (req, res, next) => {
        const { id } = req.params;
        const { name } = req.body;

        Todo.findOne({ where: { id : id } })
            .then( (todo) => {
                todo.update({ name: name }).then(()=>{
                    res.status(202).json({
                        message : 'Update success',
                        data : todo,
                    });
                });
            })
            .catch( (err) => {
                next();
            });
    },

    destroy: (req, res, next) => {
        const { id } = req.params;

        Todo.findOne({ where: { id : id } })
            .then( (todo) => {
                todo.destroy().then(()=>{
                    res.status(202).json({
                        message : 'Delete success',
                        data : todo,
                    });
                });
            })
            .catch( (err) => {
                next();
            });
    }
};