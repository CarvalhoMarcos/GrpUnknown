import { Component, OnInit } from '@angular/core';
import { AlunoModule } from '../aluno/aluno.module'


@Component({
  selector: 'app-adm-page',
  templateUrl: './adm-page.component.html',
  styleUrls: ['./adm-page.component.css']
})
export class AdmPageComponent implements OnInit {
  opened = false;
  titulo :string ="PORTAL DO ADMINISTRADOR";
//  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
