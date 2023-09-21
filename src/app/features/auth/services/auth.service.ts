import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    private readonly API = 'http://localhost:5089/api/user';
    constructor(private httpClient: HttpClient) { }
    
    login(userLogin: Login): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(this.API + '/login', userLogin);
    }

    register(userRegister: any): Observable<boolean> {
        return this.httpClient.post<boolean>(this.API + '/register', userRegister);
    }
}