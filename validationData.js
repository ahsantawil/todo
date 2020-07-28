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

const Mangga = new Fruit ({
    name   : 'Mangga',
    rating : 12,
    review : 'Rasanya Manis'
})

Mangga.save(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('Berhasil simpan buah apel kedalam database')
    }
})
