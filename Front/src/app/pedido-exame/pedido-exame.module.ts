import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CadastroPedidoExameComponent} from './cadastro-pedido-exame/cadastro-pedido-exame.component'
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [CadastroPedidoExameComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [CadastroPedidoExameComponent]
})
export class PedidoExameModule {  }
