import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../users/register-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  private newUser: string;
  private newPass: string;

  constructor(private loginService: RegisterServiceService) { }

  login() {
    this.loginService.login(this.newUser, this.newPass);
  }

  logout() {
    this.loginService.logout();
  }

}
