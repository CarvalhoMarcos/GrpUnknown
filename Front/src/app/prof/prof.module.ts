import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProfComponent } from './cadastro-prof/cadastro-prof.component';
import { FormsModule } from '@angular/forms';
import { DeletarProfComponent } from './deletar-prof/deletar-prof.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [CadastroProfComponent, DeletarProfComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule
  ],
  exports:[CadastroProfComponent]
})
export class ProfModule { }
