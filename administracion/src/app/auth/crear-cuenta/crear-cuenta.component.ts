import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as Toastify from 'toastify-js';
@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  correo:any
  clave1:any
  clave2:any
  nombre:any
  apellido:any

  constructor(private _auth:AuthService, private _router:Router){}


  async crearUsuario(){

    if(this.clave1===this.clave2){
      const data={
      correo:this.correo,
      nombre:this.nombre,
      apellido:this.apellido,
        clave:this.clave2,
      }
      try{
        const r=await this._auth.crearUsuario(data)
        console.log(r)
       Toastify({
          text: "El Usuario se creo Correctamente",
          duration: 4000,
          style: {
            background: "linear-gradient(to right, #398300, #B6D83D)",
          },
          }).showToast();

          this._router.navigate(['login'])

      }catch(error){
        return  Toastify({
          text: "Hubo un error al crear el usuario",
          duration: 4000,
          style: {
            background: "linear-gradient(to right, #F1326B, #CB001E)",
          },
          }).showToast();
      }
      

    }else{
      Toastify({
        text: "Las Contraseñas No coinciden",
        duration: 4000,
        style: {
          background: "linear-gradient(to right, #FFBB05, #FF5E00)",
        },
        }).showToast();
    }

    
  }

  regresar(){
    this._router.navigate(['login'])
  }
}
