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

  getAllRegistrarExame(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
