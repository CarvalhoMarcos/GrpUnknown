import { Component, OnInit } from '@angular/core';
import { MedService } from './med.service';


@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {
  
  medicos: Object[];

  constructor(private medicoService: MedService) { }

  ngOnInit(): void {
    this.getTodosMedicos();
  }

  getTodosMedicos(){
    this.medicoService.getAllMedicos().subscribe(res => {this.medicos = res});
  }

}
