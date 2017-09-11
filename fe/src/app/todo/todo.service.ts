import { Injectable } from '@angular/core';

let todos = [
  { name : 'Install Angular, CLI', date: Date.now, status: ['completed'] },
  { name : 'Style app', date: Date.now, status: ['ongoing'] },
  { name : 'Finish service functionality', date: Date.now, status: ['ongoing'] },
  { name : 'Setup API', date: Date.now, status: ['pending'] }
];

@Injectable()
export class TodoService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(todos));
  }

}
