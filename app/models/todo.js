var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   	snoozed: Boolean,
	completed: Boolean,
	text : {type : String, default: '', required: true}
});

var TodoModel = mongoose.model('Todo', TodoSchema);
module.exports = mongoose.model('Todo', TodoSchema);
