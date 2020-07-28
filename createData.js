const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/db-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

// const apple = new Fruit ({
//     name : 'Apple',
//     rating : 8,
//     review : 'Rasanya Manis'
// })

// apple.save(function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Berhasil simpan buah apel kedalam database')
//     }
// })

const kiwi = new Fruit ({
    name : 'Kiwi',
    rating : 9,
    review : 'Buah Warnanya Hijau'
})
const jeruk = new Fruit ({
    name : 'Jeruk',
    rating : 8,
    review : 'Kaya vitamin C'
})
const durian = new Fruit ({
    name : 'Durian',
    rating : 8,
    review : 'Bau Buah yang menyengat'
})

Fruit.insertMany([kiwi,jeruk,durian], function(error){
    if(error) {
        console.log(error)
    }else{
        mongoose.connection.close();
        console.log('Data berhasil disimpan')
    }
})