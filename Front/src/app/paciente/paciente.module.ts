import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPaciComponent } from './cadastro-paci/cadastro-paci.component';
import { DeletarPaciComponent } from './deletar-paci/deletar-paci.component';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [CadastroPaciComponent, DeletarPaciComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule

  ]
})
export class PacienteModule { }
