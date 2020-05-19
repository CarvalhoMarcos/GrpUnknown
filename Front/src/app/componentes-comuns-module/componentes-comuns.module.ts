import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

import { FooterComponent } from "./footer/footer.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './app-toolbar/toolbar.component';


//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [FooterComponent, SidenavComponent,ToolbarComponent],
})
export class ComponentesComunsModule {}
