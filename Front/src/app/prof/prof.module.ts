import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProfComponent } from './cadastro-prof/cadastro-prof.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroProfComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CadastroProfComponent]
})
export class ProfModule { }
