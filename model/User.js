const mongoose = require('mongoose');
const validateEmail = require('../util/validateEmail');
const { Thought } = require('.');


const userSchema = mongoose.Schema({
  username: { 
    type: String,
    unique: true,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    validate: validateEmail
  },
  thoughts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
})


userSchema.pre('remove', async function(next) {
  Thought.remove({ user_id: this._id }).exec();
  next();
})


userSchema.virtual('friendCount').get(function() {
  return this.friends.length();
})


module.exports =  mongoose.model("User", userSchema);