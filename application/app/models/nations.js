// set module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema for nations
var Nations = mongoose.model('Nations', new Schema(
	{
		"_id" : Number,
		"code" : String,
		"name" : String,
		"nickname" : String,
		"ranking" : Number,
		"history" : Object,
		"group" : String
	}),
	'nations'
);

var allDisplay = function() {
	Nations.find().exec(function(err, doc) {
		if (err) throw err;
		console.log(doc);
	});	
}

var groupDisplay = function(name) {
	Nations.find({"group" : name}).exec(function(err, doc) {
		if (err) throw err;
		console.log(doc);
	});	
}

exports.groupDisplay = groupDisplay;
exports.allDisplay = allDisplay;

