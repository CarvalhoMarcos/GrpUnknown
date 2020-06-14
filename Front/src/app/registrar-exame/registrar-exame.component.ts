import { Component, OnInit } from "@angular/core";
import { RequestRegistrarExame, RegistrarExame } from "./registrar-exame.model";
import { RegistrarExameService } from "./registrar-exame.service";

@Component({
  selector: "app-registrar-exame",
  templateUrl: "./registrar-exame.component.html",
  styleUrls: ["./registrar-exame.component.css"],
})
export class RegistrarExameComponent implements OnInit {
  // lista de seleção
  typesOfShoes: string[] = [
    "Boots",
    "Clogs",
    "Loafers",
    "Moccasins",
    "Sneakers",
  ];

  //requests/responses
  responseRegistrarExame: RegistrarExame;
  requestRegistrarExame: RequestRegistrarExame;

  registrarExame: Object[];

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
    this.getTodosPedidos();
  }

  getTodosPedidos() {
    this.registrarExameService.getAllRegistrarExame().subscribe((res) => {
      this.registrarExame = res;
    });
  }

  // request: RequestRegistroExame = {
  //   exame_id: "",
  //   pedido_id: "",
  //   examinador_id: "",
  //   data_hora_id: "", //mudar para datetime
  //   pdf_id: "",
  // };
  // response: ResponseRegistroExame;

  // constructor() {}

  // ngOnInit(): void {}

  finalizarRegistro() {}
}
