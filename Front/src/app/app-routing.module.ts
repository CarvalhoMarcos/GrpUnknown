import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroMedComponent } from './med/cadastro-med/cadastro-med.component';
import { CadastroProfComponent } from './prof/cadastro-prof/cadastro-prof.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adm', component: AdmPageComponent },
  { path: 'adm/cad-aluno', component: CadastroAlunoComponent },
  { path: 'adm/cad-med', component: CadastroMedComponent },
  { path: 'adm/cad-prof', component: CadastroProfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
