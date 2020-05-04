import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno, RequestCreateAluno, ResponseCreateAluno, ResponseAlunos } from "./aluno.model";
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
  getAluno(cpf: string): Observable<Aluno> {
    return this.http.get<Aluno>(this.url + "/" + cpf);
  }

  cadastrarAluno(request: RequestCreateAluno): Observable<ResponseCreateAluno> {
    return this.http.post<ResponseCreateAluno>(this.url, request);
  }

}
