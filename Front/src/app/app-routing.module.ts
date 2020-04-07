import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { FormProfessorComponent } from './form-professor/form-professor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adm', component: AdmPageComponent },
  { path: 'aluno', component: FormAlunoComponent },
  { path: 'medico', component: FormMedicoComponent },
  { path: 'professor', component: FormProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
