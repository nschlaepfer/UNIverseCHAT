const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema({
  userText: {
    type: String,
    required: true,
  },
  botText: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  savedPrompts: {
    type: [PromptSchema],
    default: [],
  },
});

module.exports = mongoose.model('User', UserSchema);

