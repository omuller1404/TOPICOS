import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalesService } from 'src/app/services/animales.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-animales-alta',
  templateUrl: './animales-alta.component.html',
  styleUrls: ['./animales-alta.component.css']
})
export class AnimalesAltaComponent {
  model:any;
  id:any;
  type:any;
  nombre:any;
  edad:any;
  animal:any;
  data:any;
  sex:any;
  tiposDeAnimales = [
    { tipo: 'Mamífero', nombre: 'León', especie: 'Panthera leo' },
    { tipo: 'Herbívoro', nombre: 'Elefante', especie: 'Loxodonta africana' },
    { tipo: 'Reptil', nombre: 'Cocodrilo', especie: 'Crocodylus niloticus' },
    { tipo: 'Ave', nombre: 'Águila', especie: 'Aquila chrysaetos' },
    { tipo: 'Anfibio', nombre: 'Rana', especie: 'Rana temporaria' },
  ]

  constructor(private _router:Router,private _animales:AnimalesService){

  }
  async postAnimales(){
    this.data={
      name:this.animal,
      pname:this.nombre,
      sex:this.sex,
      type:this.type,
      age:this.edad
    }
console.log(this.data)

     await this._animales.postAnimales(this.data)

     await Toastify({
      text: "El animal se creo correctamente",
      duration: 4000,
      style: {
        background: "linear-gradient(to right, #398300, #B6D83D)",
      },
      }).showToast();
  
      this._router.navigate(['app/animales'])
  }
}
