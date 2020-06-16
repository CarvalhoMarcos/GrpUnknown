import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoExame, ResponseTiposExame } from './tipo-exame.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoExameService {

  private url = "http://localhost:4003/tipo_exame/";

  constructor(private http: HttpClient) { }

  getAllPedidoExame(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  

}
