import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  RequestRegistrarExame,
  ResponseRegistrarExame,
  RegistrarExame,
} from "./registrar-exame.model";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RegistrarExameService {
  private url = "http://localhost:4003/residente/";

  // constructor() {}
  constructor(private http: HttpClient) {}

  // pegar pedidos de exame em aberto
  getAllRegistrarExame(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  cadastrarRegistro(
    request: RequestRegistrarExame
  ): Observable<RequestRegistrarExame> {
    return this.http.post<RequestRegistrarExame>(this.url, request);
  }
}
