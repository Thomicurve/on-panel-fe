import { Component } from '@angular/core';
import { Login } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  userLogin: Login = new Login();

  constructor(private authService: AuthService){}

  onSubmitLogin() {
    this.authService.login(this.userLogin).subscribe({
      next: (response) => {
        console.log('Login efetuado com sucesso!');
        localStorage.setItem('token', response.token)
      },
      error: (err) => console.log('Erro ao efetuar login', err)
    })
  }
}
