'use strict';

module.exports = function(app) {
  var todo = require('../controllers/todo.controller');

  app.route('/tasks')
    .get(todo.list_all_tasks)
    .post(todo.create_a_task);

  app.route('/tasks/:taskId')
    .get(todo.read_a_task)
    .put(todo.update_a_task)
    .delete(todo.delete_a_task);
}
