'use strict';
module.exports = function(app) {
  var PushBots = require('../controllers/PushBotsController');


  // PushBots Routes
  app.route('/pb_rec')
    .get(PushBots.list_all_rec)
    .post(PushBots.create_a_rec);


  app.route('/pb_rec/:pb_Id')
    .get(PushBots.read_a_rec)
    .put(PushBots.update_a_rec)
    .delete(PushBots.delete_a_rec);
};