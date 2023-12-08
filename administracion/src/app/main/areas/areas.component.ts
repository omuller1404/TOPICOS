import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {
data:any
p:number=1;
  constructor(private _areas:AreasService, private _router:Router){}

  ngOnInit(){
    this.init()
  }
  async init(){
    const r= await this._areas.getArea()
    console.log(r)
    this.data=r
    const countByType = this.data.reduce((acc:any, obj:any) => {
      const type = obj.type;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
    
    console.log(countByType);
  }
  crearArea(){
    this._router.navigate(['app/creararea'])
  }
  async renderChart(){

    console.log(this.data)
    console.log(this.data.map((i:any)=>i.fecha.split('T')[0]))
  
    const data = this.data.map((i:any)=>({
      fecha:i.fecha.split('T')[0],
      precioTotal:i.precio_total
    }))
    
  
    new Chart(
      <HTMLCanvasElement>document.getElementById('pieChart'),
      {
        type: 'bar',
        data: {
          labels: data.map((row:any) => row.nombre),
          datasets: [
            {
              label: 'compras por dia',
              data: data.map((row:any) => row.type),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
            }
          ]
        }
      }
    );
  }
  
}
