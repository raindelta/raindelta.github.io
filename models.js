var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
     token : String,
     email: String,
     hashed_password: String,
     salt : String,
     temp_str:String
});
//need to change!
mongoose.connect('mongodb://test:test@ds031865.mlab.com:31865/heroku_2vrl5f5p');
module.exports = mongoose.model('users', userSchema);
