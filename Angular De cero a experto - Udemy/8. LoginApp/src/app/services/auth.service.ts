import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyASep3UI7CC3pfXXyddZyzQUfBzxGahip0";

  // Nuevo Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private httpClient: HttpClient) { }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("expiresIn")
  }

  login(usuario: UsuarioModel): Observable<Object> {
    
    let authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.httpClient.post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
    .pipe(
      map(response => { 
        this.guardarToken(response["idToken"], Number(response["expiresIn"]));
        return response;
      })
    );

  }

  newUser(usuario: UsuarioModel): Observable<Object> {
    
    let authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.httpClient.post(`${this.url}signUp?key=${this.apiKey}`, authData)
    .pipe(
      map(response => { 
        this.guardarToken(response["idToken"], Number(response["expiresIn"]));
        return response;
      })
    );

  }

  private guardarToken(idToken: string, expiraIn: number): void {

    localStorage.setItem("token", idToken);
    localStorage.setItem("expiraIn", new Date().setSeconds(expiraIn).toString());

  }

  private leerToken(): string {

    if(localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return "";
    }

  }

  IsAuthenticate(): boolean {

    if (this.leerToken().length < 0) {
      return false;
    }

    let DateExpira = new Date();
    DateExpira.setTime(Number(localStorage.getItem("expiraIn")));

    if (DateExpira > new Date()) {
      return true;
    } else {
      return false;
    }

  }

}
