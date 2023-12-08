import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AreasService {
url=environment.api_areas
  constructor(private _http: HttpClient) { }

  getArea():Promise<any>{
    return firstValueFrom<any>(this._http.get(`${this.url}`))
      }
  postAreas(data:any):Promise<any>{
        return firstValueFrom<any>(this._http.post(`${this.url}`,data))
      }
}
