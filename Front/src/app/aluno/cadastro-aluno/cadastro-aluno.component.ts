import { Component, OnInit } from '@angular/core';
import { RequestCreateAluno, ResponseCreateAluno } from '../aluno.model';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  request: RequestCreateAluno = {
    cpf: "",
    nome: "",
    email: "",
    tipo_usuario: "R",
    password: "",
    sexo: "",
    cor: "",
    ano_res: ""
  }
  response: ResponseCreateAluno;

  constructor(private alunoService: AlunosService) { }

  ngOnInit(): void {
  }
  salvar() {
    this.alunoService.cadastrarAluno(this.request).subscribe(res => { this.response = res });
  }
  
  
}
