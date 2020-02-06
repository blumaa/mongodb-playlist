const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema and Model

const OfficeCharSchema = new Schema({
  name: String,
  age: Number
})

const OfficeChar = mongoose.model('officechar', OfficeCharSchema);

module.exports = OfficeChar
