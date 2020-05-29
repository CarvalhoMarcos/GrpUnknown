import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AlunoComponent } from './aluno.component';
import { DeletarAlunoComponent } from './deletar-aluno/deletar-aluno.component';

import { AlunoRoutingModule } from './aluno-routing.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [CadastroAlunoComponent, AlunoComponent, DeletarAlunoComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AlunoRoutingModule,
    MatListModule
  ],
  exports: [CadastroAlunoComponent, AlunoComponent]
})
export class AlunoModule { }
