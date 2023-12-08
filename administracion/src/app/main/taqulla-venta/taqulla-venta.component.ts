import { Component } from '@angular/core';
import { TaquillaService } from 'src/app/services/taquilla.service';

@Component({
  selector: 'app-taqulla-venta',
  templateUrl: './taqulla-venta.component.html',
  styleUrls: ['./taqulla-venta.component.css']
})
export class TaqullaVentaComponent {
model:any;
idCliente:any;
idVendedor:any;
fecha:any;
email:any;
celular:any;
precio_total:any;

constructor(private _taquilla:TaquillaService){

}

postVenta(){

  this.fecha=this.model.year+'-'+this.model.month+'-'+this.model.day
  console.log(this.fecha)
  const data={
    precio_total:this.precio_total,
    fecha:this.fecha,
    email:this.email,
    celular:this.celular,
    id_vendedor:this.idVendedor,
    id_cliente:this.idCliente,
    detalles:[]
  }
  console.log(data)
debugger
  if(data){
      this._taquilla.postTaquilla(data)
  }

}
}
