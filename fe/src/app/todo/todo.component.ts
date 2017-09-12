import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  private todos;
  private activeTasks;
  private newTodo;
  private path;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  getTodos(query = ''){
    return this.todoService.get(query)
      .then(todos => {
        this.todos = todos;
        this.activeTasks = this.todos.filter(todo => !todo.status).length;
      });
  }

  addTodo(){
    this.todoService.add({ name: this.newTodo, status: false })
      .then(() => {
        return this.getTodos();
      })
      .then(() => {
        this.newTodo = '';
      });
  }

  updateTodo(todo, newName) {
    todo.name = newName;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  deleteTodo(todo) {
    this.todoService.delete(todo._id)
      .then(() => { return this.getTodos(); });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

}
