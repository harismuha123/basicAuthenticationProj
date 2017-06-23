import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './users/register-users/register-users.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterServiceService } from './users/register-service.service';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todolist/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    LoginUserComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RegisterServiceService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
