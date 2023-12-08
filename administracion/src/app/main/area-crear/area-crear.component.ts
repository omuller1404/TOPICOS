import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalesService } from 'src/app/services/animales.service';
import { AreasService } from 'src/app/services/areas.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-area-crear',
  templateUrl: './area-crear.component.html',
  styleUrls: ['./area-crear.component.css']
})
export class AreaCrearComponent {
  model:any;
  id:any;
  type:any;
  nombre:any;
  fecha:any;
  celular:any;
  precio_total:any;
  data:any;

  constructor(private _areas:AreasService, private _router:Router){}

  async postArea(){
    this.fecha=this.model.year+'-'+this.model.month+'-'+this.model.day
    this.data={
      id: await this.generateRandomId(),
      type:this.type,
      nombre:this.nombre,
      last_maintenance:this.fecha
      
    }
    console.log(this.data)
   this._areas.postAreas(this.data)
   await Toastify({
    text: "El area se creo correctamente",
    duration: 4000,
    style: {
      background: "linear-gradient(to right, #398300, #B6D83D)",
    },
    }).showToast();

    this._router.navigate(['app/areas'])
   
  
}
generateRandomId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
}
