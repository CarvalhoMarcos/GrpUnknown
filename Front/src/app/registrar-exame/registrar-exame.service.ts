import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  RegistroExame,
  ResponseRegistroExame,
  RequestCreateRegistroExame,
  ResponseCreateRegistroExame,
} from "./registrar-exame.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RegistrarExameService {
  private url = "http://localhost:4003/registrosExame";

  // constructor() {}
  constructor(private http: HttpClient) {}

  // pegar pedidos de exame em aberto
  getRegistroExame(pedido_id: string): Observable<RegistroExame> {
    //get pedido exame pra pegar o cpf
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
