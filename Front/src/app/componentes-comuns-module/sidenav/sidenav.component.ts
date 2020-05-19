import { Component, Input } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  @Input() title = String;

  @Input() links = Array;

  constructor(private breakpointObserver: BreakpointObserver) {}
}

// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-sidenav",
//   templateUrl: "./sidenav.component.html",
//   styleUrls: ["./sidenav.component.css"],
// })
// export class SidenavComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }
