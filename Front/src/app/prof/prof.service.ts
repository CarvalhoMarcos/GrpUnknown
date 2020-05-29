import { Injectable } from '@angular/core';
import { ResponseProfs, ResponseProf, ResponseCreateProf, RequestCreateProf } from './prof.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private url = "http://localhost:4003/medico";

  constructor(private http: HttpClient) { }

  getAllProf(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getProf(cpf: string): Observable<ResponseProf> {
    return this.http.get<ResponseProf>(this.url + "/" + cpf);
  }
  
  cadastrarProf(request: RequestCreateProf): Observable<ResponseCreateProf> {
    return this.http.post<ResponseCreateProf>(this.url, request);
  }

}
