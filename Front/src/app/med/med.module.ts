import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMedComponent } from './cadastro-med/cadastro-med.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroMedComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CadastroMedComponent]
})
export class MedModule { }
