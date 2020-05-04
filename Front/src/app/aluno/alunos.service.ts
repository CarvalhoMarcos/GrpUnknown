import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreateAluno, ResponseCreateAluno, ResponseAlunos, ResponseAluno } from "./aluno.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private url = "http://localhost:4003/residente/"

  constructor(private http: HttpClient) { }

  getAllAlunos(): Observable<ResponseAlunos> {
    return this.http.get<ResponseAlunos>(this.url);
  }
  
  getAluno(cpf: string): Observable<ResponseAluno> {
    return this.http.get<ResponseAluno>(this.url + "/" + cpf);
  }

  cadastrarAluno(request: RequestCreateAluno): Observable<ResponseCreateAluno> {
    return this.http.post<ResponseCreateAluno>(this.url, request);
  }

}
