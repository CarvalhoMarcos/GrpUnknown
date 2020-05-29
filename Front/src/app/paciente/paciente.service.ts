import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePaciente, RequestCreatePaciente, ResponseCreatePaciente } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private url = "http://localhost:4003/usuario";

  constructor(private http: HttpClient) {}

  getAllPacientes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getPaciente(cpf: string): Observable<ResponsePaciente> {
    return this.http.get<ResponsePaciente>(this.url + "/" + cpf);
  }
  
  cadastrarPaciente(request: RequestCreatePaciente): Observable<ResponseCreatePaciente> {
    return this.http.post<ResponseCreatePaciente>(this.url, request);
  }
}
