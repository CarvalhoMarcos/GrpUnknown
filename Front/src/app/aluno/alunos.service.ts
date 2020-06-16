import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreateAluno, ResponseCreateAluno, Aluno, ResponseAlunos} from "./aluno.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private url = "http://localhost:4003/residente/"
  
  constructor(private http: HttpClient) { }

  getAllAlunos(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getAluno(cpf: string): Observable<Aluno> {
    return this.http.get<Aluno>(this.url + "/" + cpf);
  }

  cadastrarAluno(request: RequestCreateAluno): Observable<ResponseCreateAluno> {
    return this.http.post<ResponseCreateAluno>(this.url, request);
  }

}
