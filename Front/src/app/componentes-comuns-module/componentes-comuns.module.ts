import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { FooterComponent } from "./footer/footer.component";
import { NavegationBarComponent } from "./navegation-bar/navegation-bar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, NavegationBarComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [FooterComponent, NavegationBarComponent, SidenavComponent],
})
export class ComponentesComunsModule {}
