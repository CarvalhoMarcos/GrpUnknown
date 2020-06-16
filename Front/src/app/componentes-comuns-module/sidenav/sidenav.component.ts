import { Component, Input, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  
  opened: boolean = true;
  @Input() title = "";
  @Input() links: string[] = [];
  @Input() titulos: string[] = [];

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  // isHandset$: Observable<boolean> = this.breakpointObserver
  // .observe(Breakpoints.Handset)
  // .pipe(
  //   map((result) => result.matches),
  //   shareReplay()
  // );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {}
}

// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-sidenav",
//   templateUrl: "./sidenav.component.html",
//   styleUrls: ["./sidenav.component.css"],
// })
// export class SidenavComponent implements OnInit {
//   constructor() {}

//   
// }
