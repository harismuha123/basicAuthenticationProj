import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/';

@Injectable()
export class TodoService {

  // Placeholder for last id to simulate autoincrementing
  lastId = 0;

  // placeholder for TODOS
  todos: Todo[]

  constructor() {

   }

   // simulate POST /todos
   addTodo(todo: Todo): TodoService{
     if (!todo.id) {
        todo.id = ++this.lastId;
     }
     this.todos.push(todo);
     return this;
   }

   // simulate DELETE /todos/:id
   deleteTodoById(id: number): TodoService {
     this.todos = this.todos
      .filter(todo => todo.id !== id);
      return this;
   }

   // simulate PUT /todos/:id
   updateTodoById(id: number, values: Object = {}) {
     const todo = this.getTodoById(id);
     if (!todo) {
        return null;
     }
     Object.assign(todo, values);
     return todo;
   }

   // simulate GET /todos/:id
   getTodoById(id: number): Todo {
     return this.todos
        .filter(todo => todo.id === id)
        .pop();
   }

}
