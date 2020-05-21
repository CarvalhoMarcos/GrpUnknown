import { Component, OnInit } from '@angular/core';
import { RequestCreateProf, ResponseCreateProf } from '../prof.model';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-cadastro-prof',
  templateUrl: './cadastro-prof.component.html',
  styleUrls: ['./cadastro-prof.component.css']
})
export class CadastroProfComponent implements OnInit {
  request : RequestCreateProf = {
    cpf: "",
    nome: "",
    email: "",
    tipo_usuario: "M",
    data_nasc : "",
    password: "",
    sexo: "",
    cor: "",
    crm: "",
    eh_docente: true,
    titulo_uni: "",
  }
  response : ResponseCreateProf;

  constructor(private profService : ProfService) { }

  ngOnInit(): void {
  }
  salvar(){
    let resposta = this.profService.cadastrarProf(this.request).subscribe(res => { this.response = res });
    alert(resposta);
  }


}
