import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastroAlunoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CadastroAlunoComponent]
})
export class AlunoModule { }
