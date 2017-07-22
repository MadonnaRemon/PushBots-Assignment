'use strict';


var mongoose = require('mongoose'),
 PB_Rec = mongoose.model('PB_records');

exports.list_all_rec = function(req, res) {
 PB_Rec.find({}, function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};




exports.create_a_rec = function(req, res) {
  var new_rec = new PB_Rec(req.body);
  new_rec.save(function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};


exports.read_a_rec = function(req, res) {
 PB_Rec.findById(req.params.recId, function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};


exports.update_a_rec = function(req, res) {
 PB_Rec.findOneAndUpdate({_id: req.params.recId}, req.body, {new: true}, function(err, rec) {
    if (err)
      res.send(err);
    res.json(rec);
  });
};


exports.delete_a_rec = function(req, res) {
 PB_Rec.remove({
    _id: req.params.recId
  }, function(err, rec) {
    if (err)
      res.send(err);
    res.json({ message: 'Record successfully deleted' });
  });
};
