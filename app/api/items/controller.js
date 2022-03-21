const {Todo, Item} = require('../../db/models');

module.exports = {

    createItem: async (req, res, next) => {
        try {
            const { name, TodoId } = req.body;
            const result = await Item.create({ name, TodoId });
            res.status(201).json({
                message : 'Add Items success',
                data : result,
            });
        } catch (err) {
            next();
        }
    },
    
    getOne : async (req, res, next) => {
        try {
            const { id } = req.params;
            
            const result = await Item.findOne({
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

    updateItem: (req, res, next) => {
        const { id } = req.params;
        const { name, TodoId } = req.body;

        Item.findOne({ where: { id : id } })
            .then( (item) => {
                item.update({ name: name, TodoId: TodoId }).then(()=>{
                    res.status(202).json({
                        message : 'Update success',
                        data : item,
                    });
                });
            })
            .catch( (err) => {
                next();
            });
    },

    destroy: (req, res, next) => {
        const { id } = req.params;

        Item.findOne({ where: { id : id } })
            .then( (item) => {
                item.destroy().then(()=>{
                    res.status(202).json({
                        message : 'Delete success',
                        data : item,
                    });
                });
            })
            .catch( (err) => {
                next();
            });
    },

    move: async(req, res) => {
        try {
            const { id } = req.params;
            const { targetTodoId } = req.body;
            const result = await Item.findOne({ where: { id: id } });

            result.TodoId = targetTodoId;

            await result.save();

            res.status(200).json({
                message: 'success',
                data: result,
            });
        } catch (err) {
            next();
        }
    },
    
};