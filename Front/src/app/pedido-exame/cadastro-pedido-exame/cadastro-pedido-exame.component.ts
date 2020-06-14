import { Component, OnInit } from '@angular/core';
import { RequestCreatePedidoExame, ResponseCreatePedidoExame } from '../pedido-exame.model';
import { PedidoExameService } from '../pedido-exame.service';

@Component({
  selector: 'app-cadastro-pedido-exame',
  templateUrl: './cadastro-pedido-exame.component.html',
  styleUrls: ['./cadastro-pedido-exame.component.css']
})
export class CadastroPedidoExameComponent implements OnInit {

  request : RequestCreatePedidoExame ={
    paciente_id: "",
    data_prev: "",
    tipo_exame_id: "",
    desc_diagn: "",
    cid: "",
    status: "C"
  }
  response: ResponseCreatePedidoExame;

  constructor(private pedidoExameService : PedidoExameService ) { }

  ngOnInit(): void {
  }

  salvar(){
    this.pedidoExameService.cadastrarPedidoExame(this.request).subscribe(res => { this.response = res });
  }

}
