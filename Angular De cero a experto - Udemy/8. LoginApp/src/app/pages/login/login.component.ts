import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordar: boolean = false;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
    }

  }

  onLogin(form: NgForm) {
    
    if(form.invalid) {
      return;
    }

    Swal.fire({
      type: 'info',
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this._authService.login(this.usuario).subscribe(
      response => {
        console.log(response);
        Swal.close();

        if(this.recordar) {
          localStorage.setItem("email", this.usuario.email);
        } else {
          localStorage.removeItem("email");
        }

        this.router.navigate(['home']);
      },
      error => {

        Swal.fire({
          type: 'error',
          allowOutsideClick: false,
          title: 'Error en autenticar',
          text: error.error.error.message
        });

        console.log(error);

      }
    );

  }

}
