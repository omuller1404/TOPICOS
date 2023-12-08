import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalesService } from 'src/app/services/animales.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent {
  data:any
  p:number=1;
  constructor(private _animales:AnimalesService, private _roueter:Router){}

  ngOnInit(){
    this.init()
  }
  async init(){
    this.data= await this._animales.getAnimales()
    console.log(this.data)
  }
  animalesAlta(){
    this._roueter.navigate(['app/animales-alta'])
  }
}
