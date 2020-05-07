import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { CadastroMedComponent } from './med/cadastro-med/cadastro-med.component';
import { CadastroProfComponent } from './prof/cadastro-prof/cadastro-prof.component';

import { AlunoComponent } from './aluno/aluno.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { DeletarAlunoComponent } from './aluno/deletar-aluno/deletar-aluno.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adm', component: AdmPageComponent },
  //{ path: 'adm/aluno', loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule), data: { preload: true } },
  { path: 'aluno', component: AlunoComponent,
      children: [
        { path: 'cad-aluno', component: CadastroAlunoComponent },
        { path: 'del-aluno', component: DeletarAlunoComponent },
      ]
  },
  //{ path: 'veralunos', component: AlunoComponent },
  { path: 'adm/cad-med', component: CadastroMedComponent },
  { path: 'adm/cad-prof', component: CadastroProfComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
