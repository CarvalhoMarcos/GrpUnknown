import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdmPageComponent } from './adm-page/adm-page.component';
import { ComponentesComunsModule } from './componentes-comuns-module/componentes-comuns.module';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { MedModule } from './med/med.module';
import { ProfModule } from './prof/prof.module';
import { AdmModule } from './adm/adm.module';

import { AlunoModule } from './aluno/aluno.module';

import { AlunoRoutingModule } from './aluno/aluno-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    AdmPageComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    ComponentesComunsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MedModule,
    ProfModule,
    AdmModule,
    HttpClientModule,
    FormsModule,
    AlunoModule,
    AlunoRoutingModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
