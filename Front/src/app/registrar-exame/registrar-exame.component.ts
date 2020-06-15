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

  requestRegistrarExame: RequestRegistrarExame = {
    data_hora_exame: new Date().toISOString(),
    pedido_id: "",
  };

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

  finalizarRegistro() {
    console.log(this.requestRegistrarExame);
  }
  // this.registrarExameService
  //   .cadastrarRegistro(this.requestRegistrarExame)
  //   .subscribe((res) => {
  //     this.responseRegistrarExame = res;
  //   });

  // constructor() {}

  // ngOnInit(): void {}
}
