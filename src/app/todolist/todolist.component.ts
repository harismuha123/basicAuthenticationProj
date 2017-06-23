import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  getTodos() {
    return this.todoService.getAllTodos();
  }

}
