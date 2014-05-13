var mongoose = require('mongoose');

module.exports = mongoose.model('Counter', {
	_id: String,
	seq: Number
});
