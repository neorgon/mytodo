'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
