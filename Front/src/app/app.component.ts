import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unknown';
  titulos = [];
  links = [];


  constructor(private router: Router) {
  }

  exibeNavBar() {
    this.alterarDados();
    return this.router.url !== '/login' && this.router.url !== '/';
  }

  alterarDados() {
    if (this.router.url === '/adm') {
      this.title = "PORTAL DO ADMINISTRADOR"
      this.titulos = [
        'Médicos',
        'Professores',
        'Alunos',
        'Paciente'];
      this.links = ['adm/med',
        'adm/prof',
        'adm/aluno',
        'adm/paci',
        'pedido',
        'registro'];
    } else if (this.router.url === '/med') {
      this.title = "PORTAL DO MEDICO"
      this.titulos = [
        'Pedidos de exame',
        'Validar Laudo'
      ];
      this.links = [
        'med/pedido',
        'med/validar'
      ];
    } else if (this.router.url === '/aluno') {
      this.title = "PORTAL DO ALUNO"
      this.titulos = [
        'Registrar exame',
        'Laudar exame'];
      this.links = [
        'aluno/registro',
        'aluno/laudo'];
    }

  }
}
