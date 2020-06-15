import { Component, OnInit } from '@angular/core';
import { RequestCreatePedidoExame, ResponseCreatePedidoExame } from '../pedido-exame.model';
import { PedidoExameService } from '../pedido-exame.service';

import { TipoExame, ResponseTiposExame} from '../tipo-exame.model';
import { TipoExameService } from '../tipo-exame.service';

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

  responseTiposExame: ResponseTiposExame;

  tiposExame : Object[];

  constructor(private pedidoExameService : PedidoExameService, private tipoExameService : TipoExameService ) { }

  ngOnInit(): void {
    this.getTiposExame();
    console.log(this.tiposExame);
  }

  getTiposExame(){
    this.tipoExameService.getAllPedidoExame().subscribe(res => { this.tiposExame = res });
  }

  salvar(){
    this.pedidoExameService.cadastrarPedidoExame(this.request).subscribe(res => { this.response = res });
  }

}
