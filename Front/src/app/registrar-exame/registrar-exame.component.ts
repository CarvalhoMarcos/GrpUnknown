import { Component, OnInit } from "@angular/core";
import {
  RegistroExame,
  ResponseRegistroExame,
  RequestCreateRegistroExame,
  ResponseCreateRegistroExame,
} from "./registrar-exame.model";
import { RegistrarExameService } from "./registrar-exame.service";
import { PedidoExameService } from "../pedido-exame/pedido-exame.service";
import { PedidoExame } from "../pedido-exame/pedido-exame.model";

@Component({
  selector: "app-registrar-exame",
  templateUrl: "./registrar-exame.component.html",
  styleUrls: ["./registrar-exame.component.css"],
})
export class RegistrarExameComponent implements OnInit {
  //requests/responses
  requestCreate: RequestCreateRegistroExame = {
    data_hora_exame: new Date().toISOString(),
    pedido_id: "",
  };

  responseCreate: ResponseCreateRegistroExame;
  responseRegistro: RegistroExame; //object ou any
  responseRegistros: ResponseRegistroExame;

  pedido_id: "";

  // PedidoPacienteId
  paciente_id: "";
  responsePedido: PedidoExame;

  // lista de seleção
  pedidosList : Object[];

  // upload e render do PDF
  pdfSrc = "";

  onFileSelected() {
    let $img: any = document.querySelector("#file");

    if (typeof FileReader !== "undefined") {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  constructor(
    private registrarExameService: RegistrarExameService,
    private pedidoExameService: PedidoExameService
  ) {}

  ngOnInit(): void {
    this.getTodosPedidos();
  }

  getPedidoPacienteId() {
    this.pedidoExameService
      .getPedidoExame(this.responsePedido.paciente_id)
      .subscribe((res) => {
        this.responsePedido = res;
      });
  }

  // getTodosRegistros() {
  //   this.registrarExameService.getAllRegistrosExame().subscribe((res) => {
  //     this.registrosList = res;
  //   });
  // }

  getTodosPedidos(){
    this.pedidoExameService.getAllPedidoExame().subscribe((res) => {
        this.pedidosList = res;
    });
  }

  finalizarRegistro() {
    this.registrarExameService
      .cadastrarRegistroExame(this.requestCreate)
      .subscribe((res) => {
        this.responseCreate = res;
      });
    // console.log(this.request);
    // status: "E", // mudar pra E??
  }
}
