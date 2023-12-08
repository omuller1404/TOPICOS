import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppStorageService } from 'src/app/services/local-storage.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo!:string;
  clave!:string;
  constructor(private _auth:AuthService, private _route:Router){}

  async validarUsuario(){
    if(!this.correo||!this.clave){
      return Toastify({
        text: "Favor de llenar todos los campos",
        duration: 4000,
        style: {
          background: "linear-gradient(to right, #F1326B, #CB001E)",
        },
        }).showToast();
    }


    const data={
      correo:this.correo,
      clave:this.clave
    }
    const r= await this._auth.validarUsuario(data)
    if(!r){
      return Toastify({
        text: "Las credenciales del usuario no son validas",
        duration: 4000,
        style: {
          background: "linear-gradient(to right, #F1326B, #CB001E)",
        },
        }).showToast();
    }
    debugger
    console.log(r)
    AppStorageService.currentUser(r.usuario)
    this._route.navigate(['app'])

}
}
