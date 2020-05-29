import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  pacientes: Object[];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.getTodosPacientes();
  }
  getTodosPacientes() {
    this.pacienteService.getAllPacientes().subscribe(res => { this.pacientes = res });
  }
}
