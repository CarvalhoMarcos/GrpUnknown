import { Component, OnInit } from "@angular/core";
import {
  RegistroExame,
  ResponseRegistroExame,
  RequestCreateRegistroExame,
  ResponseCreateRegistroExame,
} from "./registrar-exame.model";
import { RegistrarExameService } from "./registrar-exame.service";

@Component({
  selector: "app-registrar-exame",
  templateUrl: "./registrar-exame.component.html",
  styleUrls: ["./registrar-exame.component.css"],
})
export class RegistrarExameComponent implements OnInit {
  // lista de seleção
  // registros: Object[]; lista do tipo aberto fazer o if pra achar esses
  typesOfShoes: string[] = [
    "Boots",
    "Clogs",
    "Loafers",
    "Moccasins",
    "Sneakers",
  ];

  //requests/responses
  responseRegistro: RegistroExame;
  // responseRegistro: Object; //object ou any

  responseRegistros: ResponseRegistroExame;

  requestCreate: RequestCreateRegistroExame = {
    data_hora_exame: new Date().toISOString(),
    pedido_id: "",
    // status: "E", // mudar pra E??
  };

  responseCreate: ResponseCreateRegistroExame;

  pedido_id: "";

  registros: Object[];

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

  constructor(private registrarExameService: RegistrarExameService) {}

  ngOnInit(): void {
    this.getTodosRegistros();
  }

  getRegistroPedidoId() {
    this.registrarExameService
      .getRegistroExame(this.pedido_id)
      .subscribe((res) => {
        this.responseRegistro = res;
      });
  }
  getTodosRegistros() {
    this.registrarExameService.getAllRegistrosExame().subscribe((res) => {
      this.registros = res;
    });
  }

  finalizarRegistro() {
    this.registrarExameService
      .cadastrarRegistroExame(this.requestCreate)
      .subscribe((res) => {
        this.responseCreate = res;
      });
    // console.log(this.request);
  }
}
