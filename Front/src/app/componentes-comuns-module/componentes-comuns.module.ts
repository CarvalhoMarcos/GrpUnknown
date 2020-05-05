import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

import { NavegationBarComponent } from "./navegation-bar/navegation-bar.component";
import { FooterComponent } from "./footer/footer.component";

//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, NavegationBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [FooterComponent, NavegationBarComponent],
})
export class ComponentesComunsModule {}
