import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { FormProfessorComponent } from './form-professor/form-professor.component';



@NgModule({
  declarations: [FormAlunoComponent, FormMedicoComponent, FormProfessorComponent],
  imports: [
    CommonModule
  ],
  exports: [FormAlunoComponent, FormMedicoComponent, FormProfessorComponent]
})
export class AdmModuleModule{ }
