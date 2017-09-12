import { Injectable } from '@angular/core';

let todos = [
  { _id: 1, name : 'Install Angular, CLI', date: Date.now, status: true, editing: false },
  { _id: 2, name : 'Style app', date: Date.now, status: false, editing: false },
  { _id: 3, name : 'Finish service functionality', date: Date.now, status: false, editing: false },
  { _id: 4, name : 'Setup API', date: Date.now, status: false, editing: false }
];

@Injectable()
export class TodoService {

  constructor() { }

  get(query = '') {
    return new Promise(resolve => {
      var data;
      if (query === 'completed' || query === 'active') {
        var isCompleted = query === 'completed';
        data = todos.filter(todo => todo.status === isCompleted);
      } else {
        data = todos;
      }
      resolve(data);
    });
  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].name = data.name;
      resolve(data);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }

}
