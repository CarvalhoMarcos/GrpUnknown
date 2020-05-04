import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMedico, ResponseMedicos, RequestCreateMedico, ResponseCreateMedico } from './med.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedService {
  private url = "localhost:4003/medico";

  constructor(private http: HttpClient) { }

  getAllMedicos(): Observable<ResponseMedicos> {
    return this.http.get<ResponseMedicos>(this.url);
  }

  getMedico(cpf: string): Observable<ResponseMedico> {
    return this.http.get<ResponseMedico>(this.url + "/" + cpf);
  }
  
  cadastrarMedico(request: RequestCreateMedico): Observable<ResponseCreateMedico> {
    return this.http.post<ResponseCreateMedico>(this.url, request);
  }
}
