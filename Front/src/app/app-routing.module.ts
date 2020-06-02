import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdmPageComponent } from "./adm-page/adm-page.component";

import { MedComponent } from "./med/med.component";
import { CadastroMedComponent } from "./med/cadastro-med/cadastro-med.component";
import { DeletarMedComponent } from "./med/deletar-med/deletar-med.component";

import { AlunoComponent } from "./aluno/aluno.component";
import { CadastroAlunoComponent } from "./aluno/cadastro-aluno/cadastro-aluno.component";
import { DeletarAlunoComponent } from "./aluno/deletar-aluno/deletar-aluno.component";

import { ProfComponent } from "./prof/prof.component";
import { CadastroProfComponent } from "./prof/cadastro-prof/cadastro-prof.component";
import { DeletarProfComponent } from "./prof/deletar-prof/deletar-prof.component";

import { PacienteComponent } from "./paciente/paciente.component";
import { CadastroPaciComponent } from "./paciente/cadastro-paci/cadastro-paci.component";
import { DeletarPaciComponent } from "./paciente/deletar-paci/deletar-paci.component";

import { MedPageComponent } from "./med-page/med-page.component";
import { AlunoPageComponent } from './aluno-page/aluno-page.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "adm", component: AdmPageComponent },
  {
    path: "adm/med",
    component: MedComponent,
    children: [
      { path: "cad-med", component: CadastroMedComponent },
      { path: "del-med", component: DeletarMedComponent },
    ],
  },
  {
    path: "adm/prof",
    component: ProfComponent,
    children: [
      { path: "cad-prof", component: CadastroProfComponent },
      { path: "del-prof", component: DeletarProfComponent },
    ],
  },
  {
    path: "adm/paci",
    component: PacienteComponent,
    children: [
      { path: "cad-paci", component: CadastroPaciComponent },
      { path: "del-paci", component: DeletarPaciComponent },
    ],
  },
  {
    path: "adm/aluno",
    component: AlunoComponent,
    children: [
      { path: "cad-aluno", component: CadastroAlunoComponent },
      { path: "del-aluno", component: DeletarAlunoComponent },
    ],
  },

  { path: "med", component: MedPageComponent },
  { path: "aluno", component: AlunoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
