import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { PedidoExame, RequestCreatePedidoExame, ResponseCreatePedidoExame } from './pedido-exame.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoExameService {

  private url = "http://localhost:4003/pedidosExame";

  constructor(private http: HttpClient) { }

  getAllPedidoExame(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getPedidoExame(paciente_id: string): Observable<PedidoExame> {
    return this.http.get<PedidoExame>(this.url + "/" + paciente_id);
  }
  
  cadastrarPedidoExame(request: RequestCreatePedidoExame): Observable<ResponseCreatePedidoExame> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    return this.http.post<ResponseCreatePedidoExame>(this.url, request, {headers: headers});
  }
}
