// models/DataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  tokenId: String,
  price: Number,
  volume: Number
});

const DataModel = mongoose.model('tokens', dataSchema);

module.exports = DataModel;
