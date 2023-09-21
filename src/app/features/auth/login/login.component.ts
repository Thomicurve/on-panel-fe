import { Component } from '@angular/core';
import { Login } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  userLogin: Login = new Login();

  onSubmitLogin() {
    console.log(this.userLogin);
  }
}
