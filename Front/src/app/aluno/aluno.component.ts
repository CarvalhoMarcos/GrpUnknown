import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { ResponseAlunos, Aluno,  } from './aluno.model';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  responseAlunos: ResponseAlunos;
  responseAluno : Aluno;
  cpf: '';

  alunos: Object[];

  constructor(private alunoService: AlunosService) { }
  
  ngOnInit(): void {
    this.getTodosAlunos();
  }

  getTodosAlunos() {
    this.alunoService.getAllAlunos().subscribe(res => { this.alunos = res });
  }

  getAlunoPorCPF() {
    this.alunoService.getAluno(this.cpf).subscribe(res => { this.responseAluno = res });
  }

}
