import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { RequestCreatePaciente, ResponseCreatePaciente } from '../paciente.model';

@Component({
  selector: 'app-cadastro-paci',
  templateUrl: './cadastro-paci.component.html',
  styleUrls: ['./cadastro-paci.component.css']
})
export class CadastroPaciComponent implements OnInit {
  
  response: ResponseCreatePaciente;
  request: RequestCreatePaciente = {
    cpf: "",
    nome: "",
    email: "",
    tipo_usuario: "P",
    data_nasc: "",
    password: "",
    sexo: "",
    cor: "",
  }

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }
  salvar() {
    this.pacienteService.cadastrarPaciente(this.request).subscribe(res => { this.response = res });
  }
}
