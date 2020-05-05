import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navegation-bar",
  templateUrl: "./navegation-bar.component.html",
  styleUrls: ["./navegation-bar.component.css"],
})
export class NavegationBarComponent implements OnInit {
  @Input("opened") opened = false;
  @Input("titulo") titulo: string = "";

  constructor() {}

  ngOnInit(): void {}
}
