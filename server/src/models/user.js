const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  email: {type: String, required:true, unique:true},
  phone: {type: String, required:true, unique:true},
  password: String,
  city: String,
  role: { 
    type: String,
    enum: ['Admin', 'User'],
    default: 'User'
  },
  userCart: Array,
  userWiss: Array,
});

const User = mongoose.model('User', userSchema);

module.exports = User