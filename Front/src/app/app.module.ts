import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdmPageComponent } from './adm-page/adm-page.component';
import { AdmModuleModule } from './adm-module/adm-module.module';
import { ComponentesComunsModule } from './componentes-comuns-module/componentes-comuns.module';
import { HomeComponent } from './home/home.component';
import { MedModuleModule } from './med-module/med-module.module';
import { ProfModuleModule } from './prof-module/prof-module.module';
import { AlunoModuleModule } from './aluno-module/aluno-module.module';
import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    AdmPageComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesComunsModule,
    AdmModuleModule,
    MedModuleModule,
    ProfModuleModule,
    AlunoModuleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    
    //HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
