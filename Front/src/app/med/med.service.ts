import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico, RequestCreateMedico, ResponseCreateMedico } from './med.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedService {
  private url = "http://localhost:4003/medico";

  constructor(private http: HttpClient) { }

  getAllMedicos(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getMedico(cpf: string): Observable<Medico> {
    return this.http.get<Medico>(this.url + "/" + cpf);
  }
  
  cadastrarMedico(request: RequestCreateMedico): Observable<ResponseCreateMedico> {
    return this.http.post<ResponseCreateMedico>(this.url, request);
  }
}
