import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { AlunoComponent } from './aluno/aluno.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adm', component: AdmPageComponent },
  { path: 'adm/cad-aluno', component: CadastroAlunoComponent },
  { path: 'veralunos', component: AlunoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
