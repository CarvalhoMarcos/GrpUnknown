import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AlunoComponent } from './aluno.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroAlunoComponent, AlunoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CadastroAlunoComponent]
})
export class AlunoModule { }
