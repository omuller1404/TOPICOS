import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.api_topicos;
  constructor(private _http:HttpClient) { }
  
  validarUsuario(data:any):Promise<any>{
    return firstValueFrom<any>(this._http.post(`${this.url}`+'/users/login',data))
  }

  crearUsuario(data:any):Promise<any>{
    return firstValueFrom<any>(this._http.post(`${this.url}`+'/users/crearUsuario',data))
  }
}
