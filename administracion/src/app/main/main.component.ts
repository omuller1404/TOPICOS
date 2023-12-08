import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
usuario:any
ngOnInit(){
  const r=localStorage.getItem('current_user');
  if(r){
    this.usuario=JSON.parse(r)
  }

}

}
