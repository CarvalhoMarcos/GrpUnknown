import { Component, OnInit } from '@angular/core';
import { RequestCreateAluno } from '../aluno.model';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  request: RequestCreateAluno={
    cpf:'',
    nome:'',
    email:'',
    tipo_usuario:'R',
    password:'',
    sexo:'',
    cor:'',
    ano_res:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
