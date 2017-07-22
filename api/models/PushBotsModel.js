'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PushBotSchema = new Schema({
  Id: {
    type: String
  },
  OS:{
      type: String,
      enum: ['IOS','Android']
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PB_records', PushBotSchema);