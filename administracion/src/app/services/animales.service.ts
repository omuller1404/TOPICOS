import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  url=environment.api_animales

  constructor(private _http:HttpClient) { }

  getAnimales():Promise<any>{
    return firstValueFrom<any>(this._http.get(`${this.url}`))
  }

  postAnimales(data:any):Promise<any>{
    return firstValueFrom<any>(this._http.post(`${this.url}`,data))
  }
}
