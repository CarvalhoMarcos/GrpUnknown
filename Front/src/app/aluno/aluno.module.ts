import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './aluno.component';




@NgModule({
  declarations: [CadastroAlunoComponent, AlunoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CadastroAlunoComponent]
})
export class AlunoModule { }
