import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { ResponseAlunos, ResponseAluno } from './aluno.model';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  responseAlunos: ResponseAlunos;
  responseAluno: ResponseAluno;
  cpf: '';
  constructor(
    private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private alunoService: AlunosService) { }

  ngOnInit(): void {

  }

  getTodosALunos() {
    this.alunoService.getAllAlunos().subscribe(res => {this.responseAlunos = res});
  }

  getAlunosPorCPF() {
    this.alunoService.getAluno(this.cpf).subscribe(res => {this.responseAluno = res});
  }

}
