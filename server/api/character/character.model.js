'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CharacterSchema = new Schema({
	character: String,
	count: Number
});

module.exports = mongoose.model('Character', CharacterSchema);