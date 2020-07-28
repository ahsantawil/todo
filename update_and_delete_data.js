const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Data name tidak ada, please isi ya!!']
    },
    rating: {
        type: Number,
        min : 1,
        max : 10
    },
    review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema);

// Fruit.updateOne({_id: '5f19a34d87994c24d4121e6e'}, {name: 'Kelapa'}, function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Berhasil update data Apple Menjadi Kelapa')
//     }
// })

Fruit.deleteOne({_id: '5f19a34d87994c24d4121e6e'}, function(error){
    if(error){
        console.log(error)
    }else{
        console.log('Berhasil delete data Kelapa')
    }
})

Fruit.find(function(error, fruits){
    if(error){
        console.log(error)
    } else {
        mongoose.connection.close();

        console.log('Nama-nama buah setelah data didelete')
        fruits.forEach(function(buah){
            console.log(buah.name)
        })
    }
})