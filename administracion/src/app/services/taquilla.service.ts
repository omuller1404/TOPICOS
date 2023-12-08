import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaquillaService {
  url=environment.api_taquilla;
  constructor(private _http:HttpClient) { }

  getTaquilla():Promise<any>{
return firstValueFrom<any>(this._http.get(`${this.url}`))
  }

  postTaquilla(data:any):Promise<any>{
    return firstValueFrom<any>(this._http.post(`${this.url}`,data))
  }
  // getUnidadesAdministrativas():Promise<unidadesAdministrativas>{
  //   return firstValueFrom<any>(this._httpClient.get(`${this.url}`+'/asistencia/obtener-unidades-administrativas'))

  // }
}
