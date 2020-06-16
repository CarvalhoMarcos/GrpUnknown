import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  RegistroExame,
  ResponseRegistroExame,
  RequestCreateRegistroExame,
  ResponseCreateRegistroExame,
} from "./registrar-exame.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PedidoExameService } from "../pedido-exame/pedido-exame.service";
import { PedidoExame } from "../pedido-exame/pedido-exame.model";

@Injectable({
  providedIn: "root",
})
export class RegistrarExameService {
  private url = "http://localhost:4003/registrosExame";
  // private urlpedidos = "http://localhost:4003/pedidosExame";

  // constructor() {}
  constructor(private http: HttpClient) {}

  // pegar pedidos de exame em aberto
  getRegistroExame(pedido_id: string): Observable<RegistroExame> {
    //get pedido exame pra pegar o cpf
    // this.http.get<PedidoExame>(this.urlpedidos + "/" + paciente_id);
    return this.http.get<RegistroExame>(this.url + "/" + pedido_id);
  }

  //o post do pedido alterar para E

  getAllRegistrosExame(): Observable<any> {
    return this.http.get<any>(this.url); //se der problema ta faltando subscribe
  }

  cadastrarRegistroExame(
    request: RequestCreateRegistroExame
  ): Observable<ResponseCreateRegistroExame> {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer " + localStorage.getItem("token"));
    return this.http.post<ResponseCreateRegistroExame>(this.url, request, {
      headers: headers,
    });
  }
}
