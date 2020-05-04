import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { ResponseAlunos } from './aluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  responseAlunos : ResponseAlunos;
  responseAluno : Response

  constructor(private alunoService : AlunosService) { }

  ngOnInit(): void {
    this.alunoService.getAllAlunos().subscribe(res => this.responseAlunos = res);
  }

}
