import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAlunoComponent} from './cadastro-aluno/cadastro-aluno.component';
import { DeletarAlunoComponent} from './deletar-aluno/deletar-aluno.component';
import { AlunoComponent } from './aluno.component';


const routes: Routes = [
  {
    path: '', component: AlunoComponent, children: [
      { path: 'cad-aluno', component: CadastroAlunoComponent },
      { path: 'del-aluno', component: DeletarAlunoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
