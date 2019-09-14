const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, //_atributo privado
  name: {
      type: String,
      required:true
  },
  age: {
    type: Number,
    required:true
},
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('Dogs', DogSchema);