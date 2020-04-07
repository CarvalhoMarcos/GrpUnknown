import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationBarComponent } from './navegation-bar/navegation-bar.component';
//import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { FormMedicoComponent } from './form-medico/form-medico.component';
import { FormProfessorComponent } from './form-professor/form-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationBarComponent,
    FooterComponent,
    SideBarComponent,
    AdmPageComponent,
    FormAlunoComponent,
    FormMedicoComponent,
    FormProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    //HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
