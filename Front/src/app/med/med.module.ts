import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMedComponent } from './cadastro-med/cadastro-med.component';
import { FormsModule } from '@angular/forms';
import { DeletarMedComponent } from './deletar-med/deletar-med.component';



@NgModule({
  declarations: [CadastroMedComponent, DeletarMedComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CadastroMedComponent]
})
export class MedModule { }
