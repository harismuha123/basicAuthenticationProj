import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent {
  private newUser: string;
  private newPass: string;

  constructor(private registerService: RegisterServiceService) {

  }

  registerUser() {
    this.registerService.registerUser(this.newUser, this.newPass)
  }
}
