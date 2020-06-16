import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CadastroPedidoExameComponent } from './cadastro-pedido-exame.component';


@NgModule({
  declarations: [CadastroPedidoExameComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [CadastroPedidoExameComponent]

})
export class CadastroPedidoExameModule { }
