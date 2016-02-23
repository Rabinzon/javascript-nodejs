'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  sent: {
    type: Boolean,
    required: true,
    index: true,
    default: false
  },
  created: {
    type: Date,
    index: true,
    default: Date.now
  },

  // add a label to search through db for sent messages
  // e.g can send letters for the same label to those who didn't receive it
  label: {
    type: String,
    index: true
  },

  // or you can label with objectId
  // e.g NewsletterRelease
  labelId: {
    type:  Schema.Types.ObjectId,
    index: true
  },

  message: {},

  // summary of the last mandrill event
  // one for each "to" item
  transportState: {
    type: [{
      state: String, // deferred/soft-bounced/...
      bounceDescription: String // invalid domain
    }],
    default: []
  },

  // Transport responds
  // one response for each "to" item
  transportResponse: [{
    Id: String,
    email: String,
    status: String,
    rejectReason: String
  }]
});

schema.methods.getFailureReasons = function() {
  let results = {};
  for (let i = 0; i < this.transportResponse.length; i++) {
    let response = this.transportResponse[i];
    let state = this.transportState[i];

    if (response.status == 'rejected' || response.status == 'invalid') {
      results[response.email] = response.status + ': ' + response.rejectReason;
    } else {
      results[response.email] = state.state;
      if (state.bounceDescription) {
        results[response.email] += ': ' + state.bounceDescription;
      }
    }
    if (!results[response.email]) {
      console.log(this);
    }
  }

  return results;
};

schema.index({ 'message.to': 1 });
schema.index({ 'transportResponse.Id': 1 });
var Letter = module.exports = mongoose.model('Letter', schema);
