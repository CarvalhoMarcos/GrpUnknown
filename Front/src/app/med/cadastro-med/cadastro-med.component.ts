import { Component, OnInit } from '@angular/core';
import { RequestCreateMedico, ResponseCreateMedico } from '../med.model';
import { MedService } from '../med.service';

@Component({
  selector: 'app-cadastro-med',
  templateUrl: './cadastro-med.component.html',
  styleUrls: ['./cadastro-med.component.css']
})
export class CadastroMedComponent implements OnInit {
  request : RequestCreateMedico = {
    cpf: "",
    nome: "",
    email: "",
    tipo_usuario: "M",
    password: "",
    sexo: "",
    cor: "",
    crm: "",
    eh_docente: false,
    titulo_uni: ""
  }
  response : ResponseCreateMedico;

  constructor(private medicoService : MedService) { }

  ngOnInit(): void {
  }
  salvar(){
    this.medicoService.cadastrarMedico(this.request).subscribe(res => { this.response = res });
  }
}
