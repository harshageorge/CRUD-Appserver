const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/AlienDb",{useNewUrlParser:true,useUnifiedTopology:true})

const Alien = mongoose.model('Alien',{

    name: String, 
    tech: String
})//to create schema

module.exports={
    Alien
}