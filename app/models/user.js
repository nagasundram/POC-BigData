var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
  FirstName: String,
  LastName: String,
	Email: String
});

module.exports = mongoose.model('users', UserSchema);