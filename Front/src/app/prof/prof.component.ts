import { Component, OnInit } from '@angular/core';
import { ProfService } from './prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  professores: Object[];

  constructor(private professorService: ProfService) { }

  ngOnInit(): void {
    this.getTodosProfessores();
  }

  getTodosProfessores() {
    this.professorService.getAllProf().subscribe(res => { this.professores = res })
  }
}
